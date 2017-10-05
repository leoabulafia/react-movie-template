import React from 'react';

import bgImage from '../images/Landing.png';
import Credits from 'Credits';

export class Trailer extends React.Component{
  render() {
    return(
      <div>
        <div style={bg} className="text-center">
          <h1 style={title}>TRAILER</h1>
          <div className="row justify-content-center">
            <div className="trailer21by9 embed-responsive embed-responsive-21by9">
              <iframe style={iframe} className="embed-responsive-item" src="https://player.vimeo.com/video/223880162" width="100%" height="100%" wmode="transparent" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
            </div>
            <div className=" trailer16by9 embed-responsive embed-responsive-16by9">
              <iframe style={iframe} className="embed-responsive-item" src="https://player.vimeo.com/video/223880162" width="100%" height="100%" wmode="transparent" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <Credits />
      </div>
    );
  }
}

export default Trailer

//STYLES

var bg = {
  minHeight: 'calc(100vh + 80px)',
  background: `rgb(42,42,42) no-repeat center center`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  marginTop: '-80px'
}

var title = {
  marginTop: '3em',
  marginBottom: '1em',
  color: '#fff'
}

var iframe = {
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  borderRadius: '8px'
}
