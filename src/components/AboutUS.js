import React from 'react';
import ModalTemplate from './ModalTemplate';
import Siborg from '../images/Siborg.jpg';
import Park from '../images/Park.jpg';
import Wu from '../images/Wu.jpg';
import White from '../images/White.jpg';
import Patel from '../images/patel.jpg';
import seed from '../images/logo.jpg';
import { Row } from 'reactstrap';
const all_members = [
  {
    image: Wu,
    title: 'Co-founder and Chief Executive Officer',
    description:'Tony Wu is a Masters Candidate at Brown University, where he plans to hone his mathematical and computer science skills and ultimately apply them to global financial betterment. Since an early age, Tony has been fascinated by the intricacies of volunteer work. He has worked very closely with Emerald Necklace Conservancy in efforts to ameliorate the conditions of Jamaica Plain. Tony was selected to attend Deloittes Alternative Spring Break in Miami, Florida where he collaborated with other volunteers and executives from across the nation to enkindle motivation and passion in the youth of the Overtown Youth Center. Tony is a strong believer that good deeds beget other good deeds and is described by others as an affable, loving and selfless person.',
    name: 'Tony Wu'
  },
  {
    image: Siborg,
    title: 'Co-founder and Chairman of the Board',
    description:'Jeremy Siborg is a Bentley University student majoring in Finance, with minors in Actuarial Science and Computer Information Systems. Showing an interest in volunteer work early on in his life, he has developed a passion for helping others. Jeremy has participated in Habitat for Humanity, assisted at High Hopes Therapeutic Riding, volunteered at Deloitte’s Alternative Spring Break in Miami, Florida and has been engaged in other services that fuel his desire to give back. Amongst his peers, Jeremy is considered a visionary and someone who holds onto the mentality of perseverance when met with adversity. Upon graduation, Jeremy will be an Actuarial Consultant at Milliman.',
    name: 'Jeremy Siborg'
  },
  {
    image: White,
    title: 'Board Member',
    description:'Jonathan White, PhD is the current director of the Service Learning and Civic Engagement Center at Bentley University. Jonathan has more than 20 years of experience in the field of sociology and he maintains an international reputation as a prolific writer and sought-after speaker. Additionally, Jonathan has an impressive career in academia as a teacher and an inspiring record of work with non-profit organizations. He actively collaborates with others within the community to enact positive change through innovative and successful projects.',
    name: 'Jonathan White'
  },
  {
    image: Park,
    title: 'Board Member',
    description: 'Se Jin Park is a Bentley University student majoring in Corporate Finance and Accounting, with minors in Computer Information Systems and Actuarial Science. He tutored low-income middle school students in mathematics and computer concepts throughout his high school career. As an Undergraduate Assistant at the Bentley Computer Information Systems Lab, Se Jin has interacted with children who wanted to pursue higher education but couldn’t due to financial reasons. From this, Se Jin decided to join Jeremy and Tony in their mission to promote financial literacy. As a passionate technologist, Se Jin strives to incorporate mobile/web solutions to the program, in order to help transcend the connection between mentor and mentee. Upon graduation, Se Jin will be an Analytics Associate at Liberty Mutual in Boston.',
    name: 'Se Jin Park'
  },
  {
    image: Patel,
    title: 'Lead Developer',
    description: 'Rishi Patel is a Bentley University graduate. He is currently working as a Technology Associate at Liberty Mutual. His passion to help others can be traced back to his camp counselor days. As a camp counselor and volunteer at the Boys & Girls Club, he was able to start the "Sports Club," a program whose main goal was to teach the younger generation the importance of a healthy lifestyle.',
    name:'Rishi Patel'
  },
  {
    image: seed,
    title: 'Seed Movement',
    description: 'We welcome all help and suggestions',
    name:'Seed'
  }
];

const Memberlist = ({all_members}) => (
  <Row>
  {all_members.map(member => (
    <ModalTemplate image={member.image} title={member.title} name={member.name} description={member.description} className="portfolio-modal fade show"/>
  ))}
  </Row>
);

const AboutUS = (props) => {
  return (
    <div>
      <section id="portfolio">
      <div className="container">
        <h2 id="abt" className="text-center">About US</h2>
        <hr className="star-primary"/>
      </div>
        <Memberlist all_members={all_members}/>
      </section>
    </div>
  );
};

export default AboutUS;
