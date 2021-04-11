import React from "react"
import { Link } from "gatsby"
//import "./NavbarDE.css"
import { Container, Navbar, Nav } from "react-bootstrap"

const NavbarDE = () => {
  return (
    <header className="bg-dark">
      <Container>
        <Navbar expand="md" bg="dark" variant="dark">
          <Navbar.Brand href="/">Diplomatic Enjoy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navBarResponsive" />
          <Navbar.Collapse id="navBarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link to="/house" className="nav-link" activeClassName="active">
                  House
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/funk" className="nav-link" activeClassName="active">
                  Funk
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  to="/techno"
                  className="nav-link"
                  activeClassName="active"
                >
                  Techno
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
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
      </Container>
    </header>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link className="navbar-brand" to="/">
    //     Diplomatic Enjoy
    //   </Link>

    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //       <li className="nav-item" key="house">
    //         <Link exact to={`/house`} activeClassName="nav-link">
    //           House
    //         </Link>
    //       </li>
    //       <li className="nav-item" key="techno">
    //         <Link exact to={`/techno`} activeClassName="nav-link">
    //           Techno
    //         </Link>
    //       </li>
    //       <li className="nav-item" key="funk">
    //         <Link exact to={`/funk`} activeClassName="nav-link">
    //           Funk
    //         </Link>
    //       </li>
    //       <li className="nav-item" key="downloads">
    //         <Link exact to={`/downloads`} activeClassName="nav-link">
    //           DJ Downloads
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}
export default NavbarDE
