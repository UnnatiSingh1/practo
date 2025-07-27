import React from 'react';
import './SignUp.css'; // For custom styling
import signupImg from '../../assets/signup-image.png'; // Use your image path

const SignUp = () => {
  return (
    <div className="signup-container d-flex align-items-center justify-content-center">
      <div className="signup-box row w-100">

        {/* Left Image Section */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img src={signupImg} alt="signup visual" className="img-fluid" />
        </div>

        {/* Right Form Section */}
        <div className="col-md-6 bg-dark text-white p-4 rounded">
          <h4 className="mb-3">Join Practo</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <div className="d-flex">
                <select className="form-select me-2" style={{ width: '30%' }}>
                  <option value="+91">+91 (IND)</option>
                  <option value="+1">+1 (US)</option>
                </select>
                <input type="text" className="form-control" placeholder="Mobile Number" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Create Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="offersCheck" />
              <label className="form-check-label" htmlFor="offersCheck">
                Receive relevant offers and promotional communication from Practo
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send OTP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
