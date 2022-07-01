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
          <Nav className="ms-auto">
            {props.admin ? (
              <>
                <Nav.Link href="/">Admin Dashboard</Nav.Link>
                <Nav.Link href="postjob">Postjob</Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
                {/* <Nav.Link href="user">  */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hello User
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="">
                      Action
                    </a>
                    <a class="dropdown-item" href="">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="">
                      Something else here
                    </a>
                  </div>
                </li>
                {/* </Nav.Link> */}
                
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
