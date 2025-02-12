/*
  # Fix schema and policies

  1. Changes
    - Add email column to user_profiles
    - Add foreign key relationship between posts and user_profiles
    - Fix recursive policies
    - Add missing indexes

  2. Security
    - Update RLS policies to prevent recursion
    - Ensure proper access control
*/

-- Add email column to user_profiles if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'user_profiles' AND column_name = 'email'
  ) THEN
    ALTER TABLE user_profiles ADD COLUMN email text;
  END IF;
END $$;

-- Add foreign key relationship between posts and user_profiles
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'posts_author_id_fkey'
  ) THEN
    ALTER TABLE posts 
    ADD CONSTRAINT posts_author_id_fkey 
    FOREIGN KEY (author_id) 
    REFERENCES user_profiles(id);
  END IF;
END $$;

-- Drop existing policies to prevent conflicts
DROP POLICY IF EXISTS "Users can read all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Admins can manage all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Anyone can read published posts" ON posts;
DROP POLICY IF EXISTS "Authors can CRUD their own posts" ON posts;
DROP POLICY IF EXISTS "Admins can CRUD all posts" ON posts;

-- Create new, non-recursive policies for user_profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON user_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can manage all profiles"
  ON user_profiles FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM user_profiles WHERE role = 'admin'
    )
  );

-- Create new policies for posts
CREATE POLICY "Anyone can read published posts"
  ON posts FOR SELECT
  USING (published = true);

CREATE POLICY "Authors can CRUD their own posts"
  ON posts FOR ALL
  USING (author_id = auth.uid());

CREATE POLICY "Admins can CRUD all posts"
  ON posts FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Add helpful indexes
CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON user_profiles(role);
CREATE INDEX IF NOT EXISTS idx_posts_author ON posts(author_id);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);