import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
function MainArea() {
  return (
    <header class="main-header">
      <div class="main-container">
        <div className="main-content">
          <h1>Welcome to WABICARE LLC</h1>
          <p>
            At WABICARE, we believe in creating a safe and nurturing environment
            where individuals can find support, community, and a sense of
            belonging. Our dedicated team is committed to empowering residents
            to thrive through compassionate care and personalized programs. Join
            us on this journey as we foster growth, build life skills, and
            create lasting connections. Together, we can make a difference.
          </p>
          <h2>Contact Us</h2>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@groupname.org
          </p>
          <h2>Follow Us</h2>
          <p>
            <Link to="https://facebook.com">Facebook</Link> |
            <Link to="https://twitter.com">Twitter</Link> |
            <Link to="https://instagram.com">Instagram</Link>
          </p>
        </div>
        <div className="side-content">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <h2>Upcoming Events</h2>
          <ul>
            <li>October 10: Community BBQ</li>
            <li>October 20: Life Skills Workshop</li>
          </ul>
          <h2>Resource Center</h2>
          <ul>
            <li>
              <Link to="/mental-health-resources">Mental Health Resources</Link>
            </li>
            <li>
              <Link to="/support-services">Local Support Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MainArea;
