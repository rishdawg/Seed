import React from 'react';
import { Col, Card, CardBlock, CardTitle, CardText } from 'reactstrap';

class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <Col xs="12"sm="6">
      <Card className="fullheight">
         <CardBlock>
           <CardTitle>{this.props.title}</CardTitle>
         </CardBlock>
         <CardBlock>
           <CardText>{this.props.text}</CardText>
         </CardBlock>
       </Card>
    </Col>
    );
  }
}

export default CardTemplate;
