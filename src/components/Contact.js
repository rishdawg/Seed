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
              <h3 className="text-center">Email CEO Tony Wu <span className="font-small">@tony_wu@seedmovement.org</span></h3>
              <div className="container fullwidth">
                <a className="text-center block" href="mailto:tony_wu@seedmovement.org">
                  <i className="fa fa-envelope fa-5x black" aria-hidden="true"></i>
                </a>
              </div>
            </Col>
            <Col xs="12"sm="4">
            <h3 className="text-center">Follow us on Instagram</h3>
            <div className="container fullwidth">
              <a className="text-center block" href="https://www.instagram.com/seedmoneymovement/?hl=en">
                <i className="fa fa-instagram fa-5x black" aria-hidden="true"></i>
              </a>
            </div>
            </Col>
            <Col xs="12"sm="4">
            <h3 className="text-center">Checkout our Linkedin</h3>
            <div className="container fullwidth">
              <a className="text-center block" href="https://www.linkedin.com/company/10477039/">
                <i className="fa fa-linkedin-square fa-5x black" aria-hidden="true"></i>
              </a>
            </div>
            </Col>
        </Row>
        </div>
        </section>
   );
 };

 export default Contact;
