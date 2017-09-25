import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Goal = (props) => {
  return (
    <div>
      <Row id="g">
          <Col xs="12">
          <h1 className="text-center">Our Goals</h1>
          <hr className="star-primary"/>
          </Col>
      </Row>
      <Row>
        <Col sm="6"xs="12">
          <Card block>
            <CardTitle>Mission</CardTitle>
            <CardText>Educate the youth to ensure a positive economic future for them and the country.</CardText>
          </Card>
        </Col>
        <Col sm="6"xs="12">
          <Card block>
            <CardTitle>Vision</CardTitle>
            <CardText>To eradicate financial illiteracy in the United States one student at a time.</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Goal;
