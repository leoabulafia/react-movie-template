import React from 'react';

import {Collapse, CardBlock, Card, Button, NavLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class TrailerModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return(
      <div>
        <NavLink style={styles.link} className="nav-link" href="#" onClick={this.toggle}>Trailer</NavLink>
        <Modal style={styles.size} isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody style={styles.modal}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe style={styles.iframe} className="embed-responsive-item" src="https://player.vimeo.com/video/223880162" width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
              </div>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

export default TrailerModal;

//STYLES

var styles = {
  size: {
    maxWidth: '75%',
    margin: '100px auto'
  },
  modal: {
    backgroundColor: '#333'
  },
  link: {
    color: '#fff',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  iframe:{
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    position: 'absolute'
  }
}
