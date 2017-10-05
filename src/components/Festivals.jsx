import React from 'react';

import festival1 from '../images/festival1.png';
import festival2 from '../images/festival2.png';
import festival3 from '../images/festival3.png';
import festival4 from '../images/festival4.png';
import festival5 from '../images/festival5.png';
import festival6 from '../images/festival6.png';


export class Festivals extends React.Component {
  render() {
    return(
      <div style={styles.bg}>
        <div className="row justify-content-center">
          <img style={styles.images} alt="Thessaloniki Documentary Festival" className="img-fluid" src={festival1} />
          <img style={styles.images} alt="Istanbul Documentary Days" className="img-fluid" src={festival2} />
          <img style={styles.images} alt="Aegean Docs" className="img-fluid" src={festival3} />
          <img style={styles.images} alt="Athens Ethnographic Film Festival" className="img-fluid" src={festival4} />
          <img style={styles.images} alt="Festival de Cine Latinoamericano de Trieste" className="img-fluid" src={festival5} />
          <img style={styles.images} alt="Peloponissos Doc Festival" className="img-fluid" src={festival6} />
        </div>
      </div>
    );
  }
}

export default Festivals;

var styles = {
  bg: {
    marginTop: '2em',
    color: '#fff'
  },
  images: {
    padding: '0.2em',
    maxHeight: '80px',
    maxWidth: '160px',
    width: 'auto',
    height: 'auto'
  },
  title: {
    color: '#fff'
  }
}
