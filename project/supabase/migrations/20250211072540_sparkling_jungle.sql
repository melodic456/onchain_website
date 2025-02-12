/*
  # Fix recursive policies

  1. Changes
    - Simplify policies to remove recursion
    - Update admin checks to use a simpler approach
    - Maintain security while avoiding circular references

  2. Security
    - Maintain RLS
    - Keep proper access control
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access to profiles" ON user_profiles;
DROP POLICY IF EXISTS "Allow users to update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Allow admin full access to profiles" ON user_profiles;
DROP POLICY IF EXISTS "Allow public read access to published posts" ON posts;
DROP POLICY IF EXISTS "Allow authors to manage their posts" ON posts;
DROP POLICY IF EXISTS "Allow admin full access to posts" ON posts;

-- Simple policies for user_profiles
CREATE POLICY "profiles_read"
  ON user_profiles FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "profiles_insert"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id OR role = 'admin');

-- Simple policies for posts
CREATE POLICY "posts_select"
  ON posts FOR SELECT
  TO PUBLIC
  USING (published = true OR author_id = auth.uid());

CREATE POLICY "posts_insert"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (author_id = auth.uid());

CREATE POLICY "posts_update"
  ON posts FOR UPDATE
  TO authenticated
  USING (author_id = auth.uid() OR EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE id = auth.uid() 
    AND role = 'admin'
  ));

CREATE POLICY "posts_delete"
  ON posts FOR DELETE
  TO authenticated
  USING (author_id = auth.uid() OR EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE id = auth.uid() 
    AND role = 'admin'
  ));

-- Update function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;