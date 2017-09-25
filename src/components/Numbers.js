import React from 'react';
import { Row, Col } from 'reactstrap';
import slide1 from '../images/Slide1.jpg';
import slide2 from '../images/Slide2.jpg';

 const Numbers = (props) => {
   return (
        <section className="success">
        <div className="container">
        <Row id="n">
            <Col xs="12" >
            <h2 className="text-center">Numbers</h2>
            <hr className="star-light"/>
            </Col>
            <Col xs="12"sm="6">
              <img className="img-fluid center-block" src={slide1} alt=""/>
              &nbsp;  
            </Col>
            <Col xs="12"sm="6">
              <img className="img-fluid center-block" src={slide2} alt=""/>
            </Col>
        </Row>
        </div>
        </section>
   );
 };

 export default Numbers;
