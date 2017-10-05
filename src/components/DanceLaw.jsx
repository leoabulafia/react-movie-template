import React from 'react';

import bgImage from '../images/pic18.jpg';

import Credits from 'Credits'

export class DanceLaw extends React.Component {
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
              <p>{data.page.dancelaw.text1}</p>
              <p>{data.page.dancelaw.text2}</p>
              <p>{data.page.dancelaw.text3}</p>
              <p>{data.page.dancelaw.text4}</p>
              <p>{data.page.dancelaw.text5}</p>
              <p>{data.page.dancelaw.text6}</p>
              <p>{data.page.dancelaw.text7}</p>
              <br />
                <p>{data.page.dancelaw.text8}
                  <a href="http://www.leynacionaldedanza.com" target="_blank"> Ley Nacional de Danza</a></p>
          </div>
        </div>
        <Credits />
      </div>
    </div>
    );
  }
}

export default DanceLaw;

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
  backgroundColor: 'rgba(0, 0, 128, 0)',
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
