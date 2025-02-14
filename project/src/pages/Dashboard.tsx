import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { PlusCircle, Edit, Trash2, Check, X } from 'lucide-react';

// Remove the export from the function declaration and only export at the end
function Dashboard() {
  const { user, ensureProfile } = useAuth();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [isCreating, setIsCreating] = useState(false);
  const [authForm, setAuthForm] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      ensureProfile().then(() => {
        checkAdminStatus();
        fetchPosts();
      });
    }
  }, [user]);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setAuthError('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: authForm.email,
        password: authForm.password,
      });

      if (error) throw error;

      if (data.user) {
        await ensureProfile();
      }
    } catch (error) {
      console.error('Signup error:', error);
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setAuthError('');
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: authForm.email,
        password: authForm.password,
      });

      if (error) throw error;
    } catch (error) {
      console.error('Signin error:', error);
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function checkAdminStatus() {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle();

      if (error) throw error;
      if (data && data.role === 'admin') {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  }

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*, user_profiles(full_name)')
        .eq('author_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  async function fetchUsers() {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  async function createPost(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Ensure profile exists before creating post
      await ensureProfile();

      const { data, error } = await supabase
        .from('posts')
        .insert([
          {
            title: newPost.title,
            content: newPost.content,
            author_id: user.id,
            published: false
          }
        ])
        .select()
        .single();

      if (error) throw error;

      setNewPost({ title: '', content: '' });
      setIsCreating(false);
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
      setAuthError('Failed to create post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  async function togglePublishPost(postId: string, currentStatus: boolean) {
    try {
      const { error } = await supabase
        .from('posts')
        .update({ published: !currentStatus })
        .eq('id', postId);

      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error('Error toggling post status:', error);
    }
  }

  async function deletePost(postId: string) {
    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  async function updateUserRole(userId: string, newRole: string) {
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;
      fetchUsers();
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  }

  if (!user) {
    return (
      <>
        {/* Header Start */}
        <div className="container-fluid hero-header bg-light py-5 mb-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 mb-3 animated slideInDown">Account Access</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Login</li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-6 animated fadeIn">
                <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="/myapps/img/hero-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="bg-light rounded p-4 p-sm-5">
                  <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="display-6 mb-4 text-center">Sign In</h1>
                    {authError && (
                      <div className="alert alert-danger" role="alert">
                        {authError}
                      </div>
                    )}
                    <form onSubmit={handleSignIn}>
                      <div className="form-floating mb-4">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                          value={authForm.email}
                          onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                          disabled={isLoading}
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          value={authForm.password}
                          onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                          disabled={isLoading}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <button
                          type="submit"
                          className="btn btn-primary py-3 w-100"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Please wait...' : 'Sign in'}
                        </button>
                        <button
                          type="button"
                          onClick={handleSignUp}
                          className="btn btn-outline-primary py-3 w-100"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Please wait...' : 'Sign up'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">Dashboard</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="/myapps/img/hero-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="display-6 mb-0">Your Posts</h2>
                <button
                  onClick={() => setIsCreating(true)}
                  className="btn btn-primary py-3 px-4 d-flex align-items-center gap-2"
                  disabled={isLoading}
                >
                  <PlusCircle size={20} />
                  New Post
                </button>
              </div>

              {isCreating && (
                <div className="bg-light rounded p-4 p-sm-5 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                  <h3 className="mb-4">Create New Post</h3>
                  {authError && (
                    <div className="alert alert-danger" role="alert">
                      {authError}
                    </div>
                  )}
                  <form onSubmit={createPost}>
                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Post Title"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        disabled={isLoading}
                      />
                      <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating mb-4">
                      <textarea
                        className="form-control"
                        id="content"
                        style={{ height: '150px' }}
                        placeholder="Post Content"
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        disabled={isLoading}
                      ></textarea>
                      <label htmlFor="content">Content</label>
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsCreating(false);
                          setAuthError('');
                        }}
                        className="btn btn-light py-3 px-4"
                        disabled={isLoading}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary py-3 px-4"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Creating...' : 'Create Post'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="bg-light rounded overflow-hidden">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.id}>
                          <td>{post.title}</td>
                          <td>{post.user_profiles?.full_name || 'Anonymous'}</td>
                          <td>
                            <span className={`badge ${post.published ? 'bg-success' : 'bg-warning'}`}>
                              {post.published ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                onClick={() => togglePublishPost(post.id, post.published)}
                                className={`btn btn-sm ${post.published ? 'btn-warning' : 'btn-success'}`}
                                disabled={isLoading}
                              >
                                {post.published ? <X size={16} /> : <Check size={16} />}
                              </button>
                              <button
                                onClick={() => deletePost(post.id)}
                                className="btn btn-sm btn-danger"
                                disabled={isLoading}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {isAdmin && (
              <div className="col-12">
                <h2 className="display-6 mb-4">User Management</h2>
                <div className="bg-light rounded overflow-hidden">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Role</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td>{user.full_name}</td>
                            <td>
                              <select
                                value={user.role}
                                onChange={(e) => updateUserRole(user.id, e.target.value)}
                                className="form-select form-select-sm w-auto"
                                disabled={isLoading}
                              >
                                <option value="user">User</option>
                                <option value="author">Author</option>
                                <option value="admin">Admin</option>
                              </select>
                            </td>
                            <td>
                              <button
                                className="btn btn-sm btn-primary"
                                disabled={isLoading}
                              >
                                <Edit size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Export the Dashboard component only once at the end of the file
export { Dashboard };