import React from 'react'
import './Components/General.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col from react-bootstrap
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faAddressCard } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
     <Router>
      <Container fluid className="app-container">
       <Row>
       <div className='col-2 SideNav'>
         <h1>Learn  <span style={{color: 'red', fontStyle:'italic'}}>ID</span></h1>
           <ul>
             <li><a href="/">Home<FontAwesomeIcon icon={faHome}/></a></li>
             <li><a href="/about">About<FontAwesomeIcon icon={faInfoCircle} /></a></li>
             <li><a href="/services">Services<FontAwesomeIcon icon={faCogs} /></a></li>
             <li><a href="/contact">Contact<FontAwesomeIcon icon={faAddressCard} /></a></li>
           </ul>
         </div>
         <Col xs={10} className="main-content">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/services" element={<Services />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
         </Col>
       </Row>
     </Container>
   </Router>

 );

}

export default App
