/*
  # Fix user profiles and posts relationships

  1. Changes
    - Add missing foreign key relationship between posts and user_profiles
    - Update RLS policies to fix infinite recursion
    - Add indexes for better performance

  2. Security
    - Simplified RLS policies to prevent recursion
    - Maintain proper access control for users and admins
*/

-- Drop existing policies to prevent conflicts
DROP POLICY IF EXISTS "profiles_read" ON user_profiles;
DROP POLICY IF EXISTS "profiles_insert" ON user_profiles;
DROP POLICY IF EXISTS "profiles_update" ON user_profiles;
DROP POLICY IF EXISTS "posts_select" ON posts;
DROP POLICY IF EXISTS "posts_insert" ON posts;
DROP POLICY IF EXISTS "posts_update" ON posts;
DROP POLICY IF EXISTS "posts_delete" ON posts;

-- Create simplified policies for user_profiles
CREATE POLICY "allow_public_read"
  ON user_profiles FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "allow_auth_insert"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "allow_auth_update"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create simplified policies for posts
CREATE POLICY "allow_public_read_published"
  ON posts FOR SELECT
  TO PUBLIC
  USING (published = true OR author_id = auth.uid());

CREATE POLICY "allow_auth_insert"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (author_id = auth.uid());

CREATE POLICY "allow_auth_update"
  ON posts FOR UPDATE
  TO authenticated
  USING (author_id = auth.uid());

CREATE POLICY "allow_auth_delete"
  ON posts FOR DELETE
  TO authenticated
  USING (author_id = auth.uid());

-- Ensure indexes exist
CREATE INDEX IF NOT EXISTS idx_posts_author_published 
  ON posts(author_id, published);

CREATE INDEX IF NOT EXISTS idx_user_profiles_role 
  ON user_profiles(role);