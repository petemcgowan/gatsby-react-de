import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const NavbarDE = () => {
  return (
    <header>
      {/* <Container> */}
      <Navbar expand="md" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Diplomatic Enjoy</Navbar.Brand>
        <Navbar.Toggle
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="navbarNav">
          <Nav as="ul" className="navbar-nav">
            <Nav.Item>
              <Link to="/house" className="nav-link" activeClassName="active">
                House
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/funk" className="nav-link" activeClassName="active">
                Funk
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/techno" className="nav-link" activeClassName="active">
                Techno
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/downloads"
                className="nav-link"
                activeClassName="active"
              >
                DJ Downloads
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
export default NavbarDE
