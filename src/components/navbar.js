import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  Tabs,
  ButtonToolbar,
  Button,
  Table,
  ButtonGroup,
  Row,
  Col,
  Grid,
  Panel,
  FormGroup,
  FormControl,
} from "react-bootstrap";
// ms for right alignment in the navbar
// me for left alignment in the navbar
export const MyNavbar = (props) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <div class="container-fluid">
      {/* <Container> */}
      <Navbar.Brand href="#home">TNP SVNIT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" >
          {props.admin ? (
            <>
              <Nav.Link href="postjob">Postjob</Nav.Link>
              <Nav.Link href="/">Admin Dashboard</Nav.Link>
            </>
          ) : props.isloggedin ? (
            <>
              <Nav.Link href="/">Dash Board</Nav.Link>
              <Nav.Link href="history">History</Nav.Link>
              <Nav.Link href="alljobs">All Jobs</Nav.Link>
              <Nav.Link href="myprofile">My Profile</Nav.Link>
            </>
          ) : (
            <Nav.Link href="/">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      </div>
      {/* </Container> */}
    </Navbar>
  );
};
