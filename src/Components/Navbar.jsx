import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Route,Routes,Link} from "react-router-dom";
import { About } from '../Pages/about';
import { Contact } from '../Pages/contact';
import { Home } from '../Pages/home';


function NavbarPort() {
  return (
    <>
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand >PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link   as={Link} to="/about">About</Nav.Link>
            <Nav.Link   as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse >
      </Container>
    </Navbar>
      <div>
        <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
      </div>
  </>
  );
}

export default NavbarPort;