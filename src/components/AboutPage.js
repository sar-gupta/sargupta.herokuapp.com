import React from 'react';
import AnimatedText from './AnimatedText';

const display = (stringToBeAnimated) => {
  return stringToBeAnimated.split('').map((letter, index) => {
    return <AnimatedText key={index}>{letter}</AnimatedText>;
  });
};

const AboutPage = () => (
  <div className="full-page right-side">
    <div className="right-side__title about-page__title">
    {display("About")}
    <span> </span>
    <span> </span>    
    {display("Me")}
    <div className="right-side__title__body">
      I'm currently a third year student at Netaji Subhas Institute of Technology, Delhi. I'm interested in <i>web development</i>, <i>machine learning</i> and <i>general artificial intelligence</i>.
      <br />
      <div>
      <h2>Education:</h2>
      <ul>
        <li>
        NSIT, University of Delhi - B.E. in Information Technology (expected June 2019)
        <br />
        <b>77.05%</b>
        </li>
        <li>
        Oxford Sr. Sec. School, Vikaspuri (2003-2015)
        <br />
         - CBSE XII (PCM with Computers) <b>96.0%</b>
        <br />
         - CBSE X (CGPA) <b>10.0</b>
        </li>
      </ul>
      </div>
    </div>
    </div>
  </div>  
);

export default AboutPage;