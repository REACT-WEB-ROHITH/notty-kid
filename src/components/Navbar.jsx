import React from "react";
import { Link } from "react-router-dom";
import "../componentsCss/modifyMe.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary modifyMe">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/noty-kid">
          📌NotePIN📍
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/allnotes">
                  ALL-NOTES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delete">
                  DELETED
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
