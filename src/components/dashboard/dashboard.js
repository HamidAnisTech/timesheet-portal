import React from "react";
import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
//import { Link } from "react-router-dom"; // Assuming you're using React Router

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="container">
          <div className="logo">WEBICARE LOGO</div>
          <ul className="nav">
            <li>
              <a href="#">Users</a>
            </li>
            <li>
              <a href="#">Timesheet</a>
            </li>
          </ul>
        </div>
      </nav>
      <header class="header">
        <div class="container">
          <div>
            <h1>FlexBox Cheat Sheet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              alias possimus, commodi nihil voluptates ea explicabo a rem quidem
              tenetur?
            </p>
          </div>
          <img src="grid.webp" alt="grig svg picture" />
        </div>
      </header>
      <section class="boxes">
        <div class="container">
          <div class="box">
            <h2>Course 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              obcaecati.
            </p>
          </div>
          <div class="box">
            <h2>Course 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis, quasi.
            </p>
          </div>
          <div class="box">
            <h2>Course 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, repudiandae?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
