import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export default function Navbar() {
 
  const state = useSelector((state) => state);
  
  return (
    <nav class="navbar navbar-expand-lg navbar bg-dark p-4 fixed-top">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand text-light">
          Moon Tech
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="all" class="navbar-brand  text-light">
                All
              </Link>
            </li>
            <li class="nav-item">
              <Link to="cart" class="navbar-brand  text-light">
                Cart
                {state?.cart?.length}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="toprated"
                class="nav-link active  text-light"
                aria-current="page"
                href="#"
              >
                Top Rated
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="about"
                class="nav-link active  text-light"
                aria-current="page"
                href="#"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
