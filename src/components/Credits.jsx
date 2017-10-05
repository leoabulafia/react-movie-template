import React from 'react';

import incaa from '../images/incaa.png';
import argentina from '../images/argentina.png';
import cineargentino from '../images/cineargentino.png';
import kinisi from '../images/kinisi.png';
import badcrow from '../images/badcrow.png';
import authorwave from '../images/authorwave.png';
import imagenesdeaca from '../images/imagenesdeaca.png';


export class Credits extends React.Component{
  render() {
    return(
      <div style={styles.bg}>
        <div>
        </div>
        <div style={styles.logos} className="text-center">
          <img style={styles.logo} alt="Incaa Logo" className="img-fluid" src={incaa} />
          <img style={styles.logo} alt="Argentina Cine" className="img-fluid" src={argentina} />
          <img style={styles.logo} alt="Cine Argentino" className="img-fluid" src={cineargentino} />
          <img style={styles.logo} alt="Kinisi Productora" className="img-fluid" src={kinisi} />
          <img style={styles.logo} alt="Badcrow" className="img-fluid" src={badcrow} />
          <img style={styles.logo} alt="Authorwave" className="img-fluid" src={authorwave} />
          <img style={styles.logo} alt="Imagenes de Aca" className="img-fluid" src={imagenesdeaca} />
        </div>
      </div>
    );
  }
}

export default Credits;

var styles = {
  bg: {
    backgroundColor: '#fff'
  },
  logos: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  logo: {
    padding: '1em'
  }
}
