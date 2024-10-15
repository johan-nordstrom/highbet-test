import React from 'react';
import { BrowserRouter as Router, Route, switch, Link } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { CreateArticle } from './components/CreateArticle';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/create-article">Create Article</Link></li>
            </ul>
          </nav>

            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/create-article" Component={CreateArticle} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;