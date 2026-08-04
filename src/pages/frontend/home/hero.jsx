// src/pages/Home.js (Without Icons)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setCurrentUser(user);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing user:', error);
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  return (
    <div className="container py-5">
      
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold">
          <span className="text-primary">Todo</span>App
        </h1>
        <p className="lead text-muted">Manage your tasks efficiently and securely</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="btn btn-primary btn-lg">Get Started</Link>
              <Link to="/signup" className="btn btn-outline-primary btn-lg">Sign Up</Link>
            </>
          ) : (
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Go to Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <div className="card-body">
              <h5 className="card-title">Organize Tasks</h5>
              <p className="card-text text-muted">
                Create, manage, and organize your todos in one place.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <div className="card-body">
              <h5 className="card-title">Personal Dashboard</h5>
              <p className="card-text text-muted">
                Each user has their own private dashboard with todos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <div className="card-body">
              <h5 className="card-title">Secure Access</h5>
              <p className="card-text text-muted">
                Your data is safe with authentication and session management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ Profile Card - Shows only when logged in */}
      {isLoggedIn && currentUser && (
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header bg-primary text-white rounded-top-4 p-4">
                <h4 className="mb-0">Welcome, {currentUser.Name || 'User'}!</h4>
              </div>
              
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <span className="text-muted">Full Name</span>
                      <span className="fw-semibold">{currentUser.Name || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <span className="text-muted">Email</span>
                      <span className="fw-semibold">{currentUser.Email || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <span className="text-muted">Account ID</span>
                      <span className="fw-semibold text-muted small">
                        {currentUser.userID || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-footer bg-transparent border-0 p-4 pt-0">
                <Link to="/dashboard" className="btn btn-primary w-100">
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ⭐ Show when NOT logged in */}
      {!isLoggedIn && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0 rounded-4 bg-light">
              <div className="card-body text-center p-5">
                <h4 className="mb-3">Get Started</h4>
                <p className="text-muted">
                  Please login or sign up to manage your todos.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-primary">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;