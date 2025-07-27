import React from 'react'
//import Navbar from './mycomponent/Navbar.js';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <style>
        {`
          .dropdown-menu {
            background-color: #000 !important;
          }
          .dropdown-item {
            color: #fffacd !important;
          }
          .dropdown-item:hover,
          .dropdown-item:focus,
          .dropdown-item:active {
            color: #000 !important;
            background-color: #fffacd !important;
          }
             .navbar-brand {
      font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 700;
      font-size: 1.8rem;
      cursor: pointer;
      user-select: none;
      letter-spacing: 1.5px;
      color: #00baf2 !important;
      display: inline-flex;
    }
    .navbar-brand .to {
      color: #00d25b;
    }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <span>prac</span><span className="to">to</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/find-doctors">Find Doctors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Video consult</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Medicines</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Lab Tests</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Surgeries</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul>
                <li className="nav-item dropdown list-unstyled">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false" style={{ color: '#fffacd' }}>
                    For Corporates
                  </Link>
                  <ul className="dropdown-menu" style={{ backgroundColor: '#000' }}>
                    <li><Link className="dropdown-item" to="#" style={{ color: '#fffacd' }}>Health and wellness plan</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#" style={{ color: '#fffacd' }}>group insurance</Link></li>


                  </ul>
                </li>
              </ul>

              <ul>
                <li className="nav-item dropdown list-unstyled">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false" style={{ color: '#fffacd' }}>
                    For Providers
                  </Link>
                  <ul className="dropdown-menu" style={{ backgroundColor: '#000' }}>
                    <li><Link className="dropdown-item" to="#" style={{ color: '#fffacd' }}>Software for providers</Link></li>
                    <li><hr className="dropdown-divider" /></li>

                    <li><Link className="dropdown-item" to="#" style={{ color: '#fffacd' }}> List your practice for free</Link></li>

                  </ul>
                </li>
              </ul>
              <ul>
                <li className="nav-item dropdown list-unstyled">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false" style={{ color: '#fffacd' }}>
                    Security & Help
                  </Link>
                  <ul className="dropdown-menu" style={{ backgroundColor: '#000' }}>
                    <li><Link className="dropdown-item" to="#" style={{ color: '#fffacd' }}>Data Security </Link></li>
                    <li><hr className="dropdown-divider" /></li>

                    <li><Link className="dropdown-item" to="#" style={{ color: '#fffacd' }}>Help</Link></li>

                  </ul>
                </li>
              </ul>

              <div className="ms-3">
                <Link className="btn btn-outline-success" to="/login">Login/Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;