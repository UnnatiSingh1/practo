import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#121212', color: '#fff' }}>
      <h2>Login to Practo</h2>
      
      <form>
        <input type="text" placeholder="Email / Phone" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: '15px' }}>
        New to Practo?{" "}
        <Link to="/register" style={{ color: 'orange', textDecoration: 'none' }}>
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
