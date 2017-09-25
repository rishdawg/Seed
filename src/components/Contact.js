import React from 'react';
import { Row, Col } from 'reactstrap';

 const Contact = (props) => {
   return (
        <section className="success">
        <div className="container">
        <Row id="con">
            <Col xs="12" >
            <h2 className="text-center">Contact</h2>
            <hr className="star-light"/>
            </Col>
            <Col xs="12"sm="4">
              <h3>Follow us on Instagram</h3>
              <a href="https://www.instagram.com/seedmoneymovement/?hl=en">
              <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
              </a>
            </Col>
            <Col xs="12"sm="4">
            <h3>Follow us on Instagram</h3>
            <a href="https://www.instagram.com/seedmoneymovement/?hl=en">
            <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
            </a>
            </Col>
            <Col xs="12"sm="4">
            <h3>Follow us on Instagram</h3>
            <a href="https://www.instagram.com/seedmoneymovement/?hl=en">
            <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
            </a>
            </Col>
        </Row>
        </div>
        </section>
   );
 };

 export default Contact;
