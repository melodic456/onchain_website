import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

type Post = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  author: {
    full_name: string;
  };
};

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        content,
        created_at,
        author:user_profiles(full_name)
      `)
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (data) {
      setPosts(data);
    }
  }

  if (selectedPost) {
    return (
      <>
        {/* Header Start */}
        <div className="container-fluid hero-header bg-light py-5 mb-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 mb-3 animated slideInDown">{selectedPost.title}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Blog</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Post</li>
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
              <div className="col-lg-12">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="btn btn-primary mb-4"
                >
                  ← Back to posts
                </button>
                <article className="wow fadeInUp" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-4">
                    <div className="ms-3">
                      <p className="text-primary mb-1">{selectedPost.author?.full_name || 'Anonymous'}</p>
                      <small>{new Date(selectedPost.created_at).toLocaleDateString()}</small>
                    </div>
                  </div>
                  <p className="mb-4">{selectedPost.content}</p>
                </article>
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
              <h1 className="display-4 mb-3 animated slideInDown">Blog Posts</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
            {user && (
              <div className="col-12 text-center mb-5">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="btn btn-primary py-3 px-4"
                >
                  Write a Post
                </button>
              </div>
            )}
            {posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item bg-light p-5" onClick={() => setSelectedPost(post)} style={{ cursor: 'pointer' }}>
                  <h4 className="mb-3">{post.title}</h4>
                  <p className="mb-4">{post.content.slice(0, 150)}{post.content.length > 150 ? '...' : ''}</p>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="text-primary mb-1">{post.author?.full_name || 'Anonymous'}</p>
                      <small>{new Date(post.created_at).toLocaleDateString()}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}