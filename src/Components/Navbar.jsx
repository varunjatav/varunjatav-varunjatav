import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css';


function NavbarPort() {
  return (
    <>
    <Navbar bg='dark' expand="lg" style={{position:"fixed",width:"100%"}} >
      <Container >
        {/* <img src={myPic} alt="..myPic" style={{width:"40px", borderRadius:"50%",marginRight:"30px"}}/> */}
        <Navbar.Brand className='white' style={{color:"whitesmoke"}}  >PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav > */}
           <div style={{display:"flex",justifyContent:"space-between",gap:"50px",marginLeft:"400px"}}>
           
           <a href="#home"style={{color:"whitesmoke",textDecoration:"none"}}> Home</a>
          
           
           <a href="#about" style={{color:"whitesmoke",textDecoration:"none"}}>About</a>
          
            
              
              <a href="#contact"style={{color:"whitesmoke",textDecoration:"none"}}> Contact</a>
             
              
              <a href="#project"style={{color:"whitesmoke",textDecoration:"none"}}> Project</a>
             
             
             <a href="#skill"style={{color:"whitesmoke",textDecoration:"none"}}> Skills</a>
            
              
           </div>
            
                       
{/* element.style {
    display: flex;
    justify-content: flex-end;
            */}
          {/* </Nav> */}
        </Navbar.Collapse >
     
      </Container>
    </Navbar>
     
  </>
  );
}

export default NavbarPort;