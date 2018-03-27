import React from 'react';
import AnimatedText from './AnimatedText';



const display = (stringToBeAnimated) => {
  return stringToBeAnimated.split('').map((letter, index) => {
    return <AnimatedText key={index}>{letter}</AnimatedText>;
  });
};

const HomePage = () => (
  <div className="full-page right-side home-page">
   <div className="right-side__title home-page__text">
    {display("Hi,")} 
    <br />
    {display("I'm")}
    <span> </span>
    <span> </span>    
    {display("Sarthak.")}
    <h3>Student at NSIT, Delhi.</h3>
    <br /><br />
    <br /><br />
    <a href="https://www.github.com/sar-gupta" className="button--contact" target="_blank">GITHUB</a>
    <br /><br />
    <a className="button--contact" href="https://medium.com/@sargupta" target="_blank">MEDIUM BLOG</a>
  </div>
  <div className="home-page__image">
    <img src="/images/me.jpeg" />
  </div>
  </div>
);

export default HomePage;