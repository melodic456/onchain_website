import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Service } from './pages/Service';
import { Roadmap } from './pages/Roadmap';
import { Feature } from './pages/Feature';
import { Token } from './pages/Token';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="feature" element={<Feature />} />
            <Route path="token" element={<Token />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;