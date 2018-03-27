import React from 'react';
import AnimatedText from './AnimatedText';

const display = (stringToBeAnimated) => {
  return stringToBeAnimated.split('').map((letter, index) => {
    return <AnimatedText key={index}>{letter}</AnimatedText>;
  });
};


const ProjectsPage = () => (
  <div className="full-page right-side">
    <div className="right-side__title about-page__title">
      {display("Projects")}
      <h3>Here are some projects I've done!</h3>

      <div className="projects">
      <a href="https://github.com/sar-gupta/neural-network-from-scratch" target="_blank"><div className="container">
      <img src="/images/neural-network.jpg" />
      <div className="centered">Neural Network from Scratch</div>
      </div></a>

      <a href="https://github.com/sar-gupta/convisualize_nb" target="_blank"><div className="container">
      <img src="/images/cnnvis.png" />
      <div className="centered">Visualizing a CNN</div>
      </div></a>

      <a href="https://github.com/sar-gupta/gradcam-pytorch" target="_blank"><div className="container">
      <img src="/images/gradcam.jpg" />
      <div className="centered">GradCAM Algorithm</div>
      </div></a>

      <a href="https://github.com/sar-gupta/face-detection" target="_blank"><div className="container">
      <img src="/images/face-recognition.jpg" />
      <div className="centered">Face Detection</div>
      </div></a>

      <a href="https://github.com/sar-gupta/deep-dream-pytorch" target="_blank"><div className="container">
      <img src="/images/deep-dream.jpg" />
      <div className="centered">Deep Dream</div>
      </div></a>

      <a href="https://github.com/sar-gupta/audio-to-spectrogram" target="_blank"><div className="container">
      <img src="/images/spectrogram.png" />
      <div className="centered">Audio to Spectrogram</div>
      </div></a>

      <a href="https://github.com/sar-gupta/expensify-app" target="_blank"><div className="container">
      <img src="/images/expensify.png" />
      <div className="centered">Expensify - Expense Manager</div>
      </div></a>

      <a href="https://github.com/sar-gupta/weather-app" target="_blank"><div className="container">
      <img src="/images/weather.png" />
      <div className="centered">Weather App (Terminal)</div>
      </div></a>

      <a href="https://github.com/sar-gupta/notes-app" target="_blank"><div className="container">
      <img src="/images/notes.png" />
      <div className="centered">Notes App (Terminal)</div>
      </div></a>

      <a href="https://github.com/sar-gupta/weakly-supervised-localization-survey" target="_blank"><div className="container">
      <img src="/images/survey.png" />
      <div className="centered">Weakly Supervised Localization (Research)</div>
      </div></a>
      </div>
    </div>
  </div> 
);

export default ProjectsPage;

// TODO: refactor code into separate Project component