import React from 'react';
import AnimatedText from './AnimatedText';

const display = (stringToBeAnimated) => {
  return stringToBeAnimated.split('').map((letter, index) => {
    return <AnimatedText key={index}>{letter}</AnimatedText>;
  });
};

const SkillsPage = () => (
  <div className="full-page right-side">
    <div className="right-side__title about-page__title">
      {display("Skills")}
      <div className="skills__body">
        <div>
          <ul className="skills__list">
            <li>C/C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>MATLAB</li>
          </ul>
        </div>

        <div>
          <ul className="skills__list">
            <li>React</li>
            <li>Redux</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Pytorch</li>
            <li>Tensorflow</li>
            <li>Git</li>
          </ul>
        </div>

        <div>
          <ul className="skills__list">
            <li>Machine Learning, Deep Learning</li>
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SkillsPage;