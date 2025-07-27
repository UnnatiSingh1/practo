import React from 'react';
import signupImg from '../../assets/signup-image.png'; // adjust path if needed

const DoctorRegister = () => {
  return (
    <>
  <style>{`
    input::placeholder {
      color: #f0e68c !important;  /* pale yellow */
      opacity: 1 !important;      /* ensure full visibility */
    }
  `}</style>
    <div
      style={{
        minHeight: '100vh',          // full viewport height
        backgroundColor: '#121212',  // dark background color
        color: '#fffacd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        className="row shadow p-4 rounded"
        style={{ maxWidth: '900px', width: '100%', backgroundColor: '#1e1e1e' }}
      >
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img src={signupImg} alt="signup visual" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h4 className="mb-3" style={{ color: '#fffacd' }}>
            Doctor Registration
          </h4>
          <form>
            {/* form fields with dark styles like before */}
            <div className="form-group mb-2">
              <label style={{ color: '#fffacd' }}>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                style={{
                  backgroundColor: '#121212',
                  color: '#fffacd',
                  borderColor: '#fffacd',
                }}
              />
            </div>
            {/* ... repeat for other inputs ... */}
            <div className="form-group mb-2">
              <label style={{ color: '#fffacd' }}>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                style={{
                  backgroundColor: '#121212',
                  color: '#fffacd',
                  borderColor: '#fffacd',
                }}
              />
            </div>
            <div className="form-group mb-2">
              <label style={{ color: '#fffacd' }}>Specialization</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Dermatologist"
                style={{
                  backgroundColor: '#121212',
                  color: '#fffacd',
                  borderColor: '#fffacd',
                }}
              />
            </div>
            <div className="form-group mb-2">
              <label style={{ color: '#fffacd' }}>Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile Number"
                style={{
                  backgroundColor: '#121212',
                  color: '#fffacd',
                  borderColor: '#fffacd',
                }}
              />
            </div>
            <div className="form-group mb-2">
              <label style={{ color: '#fffacd' }}>Create Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                style={{
                  backgroundColor: '#121212',
                  color: '#fffacd',
                  borderColor: '#fffacd',
                }}
              />
            </div>
            <button
              className="btn btn-primary w-100 mt-3"
              style={{ backgroundColor: '#00baf2', borderColor: '#00baf2' }}
            >
              Register as Doctor
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default DoctorRegister;
