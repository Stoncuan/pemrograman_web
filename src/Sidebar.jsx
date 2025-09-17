import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar () {
  return (
    <Nav className="flex-column bg-light vh-100 p-3" style={{ width: '250px' }}>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#messages">Messages</Nav.Link>
      <Nav.Link href="#settings">Settings</Nav.Link>
    </Nav>
  );
};

export default Sidebar;
