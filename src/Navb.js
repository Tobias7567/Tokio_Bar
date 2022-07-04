import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";

function Navb() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" id="nav_bar">
          <Container fluid >
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" id="Container_nav">
                  <NavLink className="nav_link" to="/" id="1">
                    Inicio
                  </NavLink>
                  <NavLink className="nav_link" to="/category/Alimentos" id="2">
                    Comida
                  </NavLink>
                  <NavLink className="nav_link" to="/category/Bebidas" id="3">
                    Bebidas
                  </NavLink>
                  <NavLink className="nav_link" to="/category/Cerveza" id="4">
                    Cerveza
                  </NavLink>
                  <NavLink className="nav_link" to="/category/Tragos" id="5">
                    Tragos
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navb;
/*
import { NavLink } from "react-router-dom";
import  {Nav , Navbar , Offcanvas} from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Bar.css"


function Navb() {
  return (
  
       <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="navbar">
   
       <Container >
       <Navbar.Toggle />
    
<Navbar.Collapse>
<Nav  id="Container_nav">
      <NavLink className="nav_link" to="/" id="1">
        Inicio
      </NavLink>
      <NavLink className="nav_link" to="/category/Alimentos" id="2">
        Comida
      </NavLink>
      <NavLink className="nav_link" to="/category/Bebidas" id="3">
       Bebidas
      </NavLink>
      <NavLink className="nav_link" to="/category/Cerveza" id="4">
        Cerveza
      </NavLink>
      <NavLink className="nav_link" to="/category/Tragos" id="5">
      Tragos
      </NavLink>
    </Nav>
 
    </Navbar.Collapse>
  
    </Container>
    </Navbar>


  );
}
export default Navb;*/
