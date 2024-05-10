import { Container, Nav, Navbar, Button } from "react-bootstrap";

import UserService from "../services/UserService";

export default function Header() {
  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      className="border-bottom"
    >
      <Container>
        <Navbar.Brand>
          <div className="formio-brand nav-link text-primary fw-bold">
            Application Builder
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse 
          id="basic-navbar-nav" 
          className="justify-content-end"
        >
          <Nav>
            <Button 
              className="px-5"
              variant="outline-danger" 
              onClick={()=>UserService.doLogout()} 
              size="sm"
            >
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}