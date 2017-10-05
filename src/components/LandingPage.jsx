import React from 'react';

import Festivals from 'Festivals';
import Credits from 'Credits';
import ModalArg from 'ModalArg';
import FichaTecnica from 'FichaTecnica';

import bgImage from '../images/Landing.png';

export class LandingPage extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <div>
          <div style={bg} className="bg">
            <div style={bgLayer}>
              <div className="landing">
                <div style={modal} className="col-lg-4 mx-auto">
                  <ModalArg />
                </div>
              </div>
              <div style={title} className="text-center">
                <h1>{data.page.home.header}</h1>
                <p>{data.page.home.subtitle}</p>
              </div>
              <Festivals />
            </div>
          </div>
        </div>
        <FichaTecnica data={data} />
        <Credits />
      </div>
    );
  }
}

export default LandingPage;

//STYLES

var bg = {
  minHeight: 'calc(100vh + 80px)',
  backgroundImage: `url(${bgImage})`
};

var modal = {
  marginTop: '80px'
};

var title = {
  color: '#fff'
};

var bgLayer = {
  backgroundColor: 'rgba(0, 0, 128, 0.1)',
  width: '100%',
  minHeight: 'calc(100vh + 80px)'
};
