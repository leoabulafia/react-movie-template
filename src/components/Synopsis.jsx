import React from 'react';

import bgImage from '../images/pic6.jpg';

import Credits from 'Credits';

export class Synopsis extends React.Component {
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
                <p>{data.page.synopsis.text1}</p>
                <p>{data.page.synopsis.text2}</p>
                <p>{data.page.synopsis.text3}</p>
                <p>{data.page.synopsis.text4}</p>
                <p>{data.page.synopsis.text5}</p>
              </div>
            </div>
          </div>
          <Credits />
        </div>
    );
  }
}

export default Synopsis;

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
