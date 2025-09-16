import React, { useState } from 'react';
import { Button, Offcanvas, Nav, Container, Row, Col } from 'react-bootstrap';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Row>
        {/* Sidebar untuk md ke atas */}
        <Col
          md={3}
          className="bg-light vh-100 d-none d-md-block"
          style={{ position: 'fixed', top: 0, left: 0, paddingTop: '1rem' }}
        >
          <h5 className="px-3">Sidebar Menu</h5>
          <Nav className="flex-column px-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Col>

        {/* Konten utama */}
        <Col
          xs={12}
          md={{ span: 9, offset: 3 }}
          style={{ paddingTop: '1rem', minHeight: '100vh' }}
        >
          {/* Tombol untuk mobile */}
          <Button
            variant="primary"
            className="mb-3 d-md-none"
            onClick={handleShow}
          >
            Open Sidebar
          </Button>

          <h2>Konten Utama</h2>
          <p>Ini adalah konten utama halaman.</p>
        </Col>
      </Row>

      {/* Offcanvas sidebar untuk mobile */}
      <Offcanvas show={show} onHide={handleClose} backdrop={true} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link href="#profile" onClick={handleClose}>Profile</Nav.Link>
            <Nav.Link href="#settings" onClick={handleClose}>Settings</Nav.Link>
            <Nav.Link href="#logout" onClick={handleClose}>Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default Sidebar;
