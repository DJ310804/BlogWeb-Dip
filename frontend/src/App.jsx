import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCreate from './components/BlogCreate';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="blogcreate" element={
              <ProtectedRoute>
              <BlogCreate />
              </ProtectedRoute>
              } />
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;