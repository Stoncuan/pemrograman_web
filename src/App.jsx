import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import NavbarComponent from "./NavbarComponent.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import Sidebar from "./Sidebar.jsx";

function App() {
  return (
    <>
      <NavbarComponent />

      <Row noGutters>
        <Col xs="auto">
          <Sidebar />
        </Col>
        <Col>
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Col>
      </Row>

      <Footer />
    </>
  );
}

export default App;
