import React from 'react';
import { Row, Col } from 'reactstrap';
import CardTemplate from './CardTemplate';
const all_objectives = [
  {
    text: 'It is crucial for young students to learn financial skills. We believe that educating the youth will address the root of the nation’s issue. With the life-long skills and knowledge students build from our program, financial illiteracy will hopefully become a problem of the past',
    title: 'Address the issue of financial illiteracy'
  },
  {
    text: 'Deeply embedded into SEED’s principles is the idea of mentorship. Each SEED volunteer is trained to deliver fun lessons while serving as both mentors and teachers for younger students.',
    title: 'Provide mentorship for younger students'
  },
  {
    text: 'Whether it is the concept of loans or credit versus debit cards, SEED is committed to providing students with information that is crucial to being successful in today’s society. Our goal is to introduce a level of financial awareness that will allow students to make more informed decisions regarding their future.',
    title: 'Secure a brighter future for the upcoming generation'
  },
  {
    text: 'The youth represents the future of our world. Education is of the utmost importance to us and we know that with the right program and the right people, we can change the world. Each SEED member passionately believes this and pledges to do all they can to create a positive experience for each student. We hope to partner with organizations that share our visionand together, make it become a reality.',
    title: 'Partner with schools'
  }
];

const Objectivelist = ({all_objectives}) => (
  <Row className="black">
  {all_objectives.map(objective => (
    <CardTemplate title={objective.title} text={objective.text}/>
  ))}
  </Row>
);

 const Objectives = (props) => {
   return (
        <section className="success">
        <div className="container">
        <Row id="obj">
            <Col xs="12" >
            <h2 className="text-center">Objectives</h2>
            <hr className="star-light"/>
            </Col>
            <Objectivelist all_objectives={all_objectives}/>
        </Row>
        </div>
        </section>
   );
 };

 export default Objectives;
