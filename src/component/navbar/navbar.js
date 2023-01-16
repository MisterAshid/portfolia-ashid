import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Navb = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      // variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/Main">Main</Nav.Link>
            <Nav.Link href="/Main">About</Nav.Link>
            <Nav.Link href="/Main">Skills</Nav.Link>
            <Nav.Link href="/Main">Education</Nav.Link>
            <Nav.Link href="/Main">Contact</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              About
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;
