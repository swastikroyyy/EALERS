import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './All.css';
function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar >
        <Container>
          <Navbar.Brand >
            <img
              alt=""
              src="./images/brand2.png"
              width="20"
              height="20"
              className="d-inline-block "
            />&nbsp;<span className='align-middle' style={{fontWeight:500,fontSize:"14px"}}>
            EALERS
            </span>
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
        <Navbar.Brand >
            <img
              alt=""
              src="./images/brand3.png"
              width="30"
              height="35"
              className="d-inline-block "
            />&nbsp;<span className='align-middle' style={{fontWeight:500}}>
            SMOKE
            </span>
          </Navbar.Brand>
        </Nav>
        <Nav className="">
        
        <Navbar.Brand style={{cursor:"pointer"}} onClick={handleShow}>
            <img
              alt=""
              src="./images/brand4.png"
              width="20"
              height="20"
              className="d-inline-block align-middle"
            />&nbsp;<span className='align-middle' style={{fontWeight:500,fontSize:"14px"}}>
            BRANDS</span>
          </Navbar.Brand>
    
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Modal show={show} onHide={handleClose}>
        
          <Modal.Title className="m-auto mt-4"><img
              alt=""
              src="./images/smoke.png"
              width="70"
              height="70"
              className="d-inline-block align-middle"
            />{' '}<span className=' align-middle' style={{fontSize:"70px",fontWeight:700}}>SMOKE</span></Modal.Title>
        
        <Modal.Body style={{paddingLeft:"90px",paddingRight:"90px"}}> <Form>
        
          <div className='input-data mb-3'>
            <label>Email</label>
            <input type="email"/>
          </div>
          <div className='input-data '>
            <label>Password</label>
            <input type="password"/>
          </div>
        
     

      
        <Form.Text className="text-muted">
          Forgot Your Password?
        </Form.Text>
      
      <div className='d-flex justify-content-center mt-4  mb-5 '>
      <Button variant="dark"  className='w-100' type="submit">
        Enter
      </Button>
      </div>
    </Form></Modal.Body>
       
      </Modal>
       
    </>
  );
}

export default Home;