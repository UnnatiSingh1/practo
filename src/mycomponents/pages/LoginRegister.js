import React, { useState } from 'react';
import signupImg from '../../assets/signup-image.png';

function LoginRegister() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div style={styles.container}>
      <div style={styles.tabWrapper}>
        <button
          onClick={() => setActiveTab('login')}
          style={{
            ...styles.tabButton,
            backgroundColor: activeTab === 'login' ? '#fffacd' : '#333',
            color: activeTab === 'login' ? '#000' : '#fffacd',
          }}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('register')}
          style={{
            ...styles.tabButton,
            backgroundColor: activeTab === 'register' ? '#fffacd' : '#333',
            color: activeTab === 'register' ? '#000' : '#fffacd',
          }}
        >
          Register
        </button>
      </div>

      <div style={styles.flexContainer}>
        {/* Image */}
        <div style={styles.imageWrapper}>
          <img src={signupImg} alt="signup" style={styles.image} />
        </div>

        {/* Form Box */}
        <div style={styles.formBox}>
          <div style={styles.headerRow}>
            <h2 style={{ margin: 0 }}>Join Practo</h2>
            <p style={{ margin: 0 }}>
              Are you a doctor?{' '}
              <a href="/doctor-register" style={styles.link}>
                Register Here
              </a>
            </p>
          </div>

          {activeTab === 'login' ? (
            <form style={styles.form}>
              <input type="email" placeholder="Email" style={styles.input} />
              <input type="password" placeholder="Password" style={styles.input} />
              <button type="submit" style={styles.button}>Login</button>
            </form>
          ) : (
            <form style={styles.form}>
              <input type="text" placeholder="Full Name" style={styles.input} />
              <input type="text" placeholder="Mobile Number" style={styles.input} />
              <input type="password" placeholder="Create Password" style={styles.input} />
              <div style={{ marginBottom: '15px' }}>
                <label>
                  <input type="checkbox" defaultChecked /> Receive relevant offers and communication
                </label>
              </div>
              <p style={{ fontSize: '12px', marginBottom: '10px' }}>
                By signing up, I agree to terms
              </p>
              <button type="submit" style={styles.button}>Send OTP</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#fffacd',
    minHeight: '100vh',
    padding: '2rem',
  },
  tabWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  tabButton: {
    border: 'none',
    padding: '10px 20px',
    marginRight: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '4rem',
    maxWidth: '1100px',
    margin: 'auto',
  },
  imageWrapper: {
    width: '50%',
    textAlign: 'center',
  },
  image: {
    width: '90%',
    maxWidth: '400px',
  },
  formBox: {
    width: '50%',
    backgroundColor: '#1e1e1e',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(255, 250, 205, 0.2)',
    minHeight: '400px', // To maintain equal height and avoid shaking
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    color: '#fffacd',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #fffacd',
    backgroundColor: '#1e1e1e',
    color: '#fffacd',
  },
  button: {
    padding: '10px',
    backgroundColor: '#00baf2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  link: {
    color: '#00baf2',
    textDecoration: 'none',
  },
};

export default LoginRegister;
