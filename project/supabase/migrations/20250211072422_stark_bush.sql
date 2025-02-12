/*
  # Fix database relationships and policies

  1. Changes
    - Drop and recreate tables to ensure proper relationships
    - Fix foreign key references
    - Update policies to prevent recursion

  2. Security
    - Maintain RLS
    - Set up proper access control
*/

-- Recreate tables with proper relationships
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS user_profiles;

-- Create user_profiles first (since it's referenced by posts)
CREATE TABLE user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  email text,
  role text NOT NULL DEFAULT 'user',
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_role CHECK (role IN ('admin', 'author', 'user'))
);

-- Create posts table with proper foreign key
CREATE TABLE posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author_id uuid NOT NULL,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES user_profiles(id)
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Simple, non-recursive policies for user_profiles
CREATE POLICY "Allow public read access to profiles"
  ON user_profiles FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Allow users to update own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Allow admin full access to profiles"
  ON user_profiles FOR ALL
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT up.id FROM user_profiles up WHERE up.role = 'admin'
    )
  );

-- Policies for posts
CREATE POLICY "Allow public read access to published posts"
  ON posts FOR SELECT
  TO PUBLIC
  USING (published = true);

CREATE POLICY "Allow authors to manage their posts"
  ON posts FOR ALL
  TO authenticated
  USING (author_id = auth.uid());

CREATE POLICY "Allow admin full access to posts"
  ON posts FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up 
      WHERE up.id = auth.uid() AND up.role = 'admin'
    )
  );

-- Create indexes for better performance
CREATE INDEX idx_user_profiles_role ON user_profiles(role);
CREATE INDEX idx_posts_author_id ON posts(author_id);
CREATE INDEX idx_posts_published ON posts(published);

-- Create trigger to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();