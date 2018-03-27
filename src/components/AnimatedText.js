import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rubberBand } from 'react-animations';

export default class AnimatedText extends React.Component {
  state = {
    on: false
  };


  onMouseEnter = () => {
    this.setState({
      on: true
    });
    setTimeout(() => {
      this.setState({
        on: false
      });
    }, 750);
  }

  rubberBandAnimation = keyframes`${rubberBand}`;

  render() {
    
    const Animation = styled.div`
          display: inline-block;
          animation: ${this.state.on ? `1s ${this.rubberBandAnimation}` : "none"};
          color: ${this.state.on ? '#08fdd8'  : 'white'};
      `;
    return (
      <Animation className="right-side__title__text" onMouseEnter={this.onMouseEnter}>{this.props.children}</Animation>
    );
  };

}
