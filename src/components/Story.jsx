import React from 'react';

import bgImage from '../images/pic7.jpg';

import Credits from 'Credits';

export class Story extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <div style={bg} className="bg">
          <div style={bgLayer}>
          </div>
        </div>
        <div className="justify-content-center">
          <div style={description}>
            <div style={bgStyle} className="col-lg-10 mx-auto">
              <p>{data.page.story.text1}</p>
              <p>{data.page.story.text2}</p>
              <p>{data.page.story.text3}</p>
              <p>{data.page.story.text4}</p>
            </div>
          </div>
        </div>
        <Credits />
      </div>
    );
  }
}

export default Story;

//STYLES

var bg = {
  minHeight: '60vh',
  backgroundImage: `url(${bgImage})`,
}

var bgStyle = {
  color: '#fff',
  padding: '2em',
}

var bgLayer = {
  backgroundColor: 'rgba(0, 0, 128, 0.1)',
  width: '100%',
  minHeight: 'calc(60vh + 80px)'
}

var title = {
  fontSize: '1.5em'
}

var description = {
  fontSize: '1em',
  backgroundColor: '#2a2a2a',
}
