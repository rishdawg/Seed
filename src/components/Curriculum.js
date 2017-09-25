import React from 'react';
import { Row } from 'reactstrap';
import CardTemplate from './CardTemplate';
const all_curriculum = [
  {
    text: 'We ensure that students realize that it is possible for them to pursue higher education, and work with the students to identify some of the options to prepare for higher education',
    title: 'High School and College Prep'
  },
  {
    text: 'We start with teaching the major differences between money and bartering, and discuss why money is necessary in the world today.',
    title: 'Money Vs. Bartering'
  },
  {
    text: 'Students learn the basic concepts of interest, and the ways it can be applied to verious invesetment methods.',
    title: 'Interest and Investment'
  },
  {
    text: 'Students learn why saving is beneficial, and learn the basic budgeting skills that they can apply in their daily lives.',
    title: 'Savings and Budgeting'
  },
  {
    text: 'We teach the students what debit cards and checks are, and how they differ',
    title: 'Checks and Debit Cards'
  },
  {
    text: 'Students learn the major differences between debit and credit cards, and learn the proper uses of the two cards.',
    title: 'Credit Cards'
  },
  {
    text:'Students learn the basic concept of taxes, and learn the reasons why tips exists in the world.',
    title:'Taxes and Tips'
  }
];

const Curriculumlist = ({all_objectives}) => (
  <Row className="black">
  {all_curriculum.map(curriculum => (
    <CardTemplate title={curriculum.title} text={curriculum.text}/>
  ))}
  </Row>
);

 const Curriculum = (props) => {
   return (
        <section className="portfolio">
        <div className="container">
        <div className="container">
          <h2 id="curr" className="text-center">Our Curriculum</h2>
          <hr className="star-primary"/>
        </div>
            <Curriculumlist all_curriculum={all_curriculum}/>
        </div>
        </section>
   );
 };

 export default Curriculum;
