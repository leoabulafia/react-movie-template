import React from 'react';

import {Collapse, CardBlock, Card, Button, NavLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ModalArg extends React.Component{
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
        <NavLink style={styles.border} className="text-white text-center" href="#" onClick={this.toggle}>Upcoming Events and Screenings</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
              <Card>
                <CardBlock className="text-center">
                  <h1>Trabajadores de la Danza</h1>
                  <h3>Jueves 10/08/2017 20:00hs</h3>
                  <h3>Martes 15/08/2017 20:00hs</h3>
                  <h2>ROSARIO CINE TEATRO ARTEÓN</h2>
                  <h3><a target="_blank" href="https://www.google.de/maps/place/Sarmiento+778,+S2000CML+Rosario,+Santa+Fe,+Argentina/@-32.946044,-60.6404612,17z/data=!3m1!4b1!4m5!3m4!1s0x95b7ab19b0fd057f:0x4db609b8d113c2a4!8m2!3d-32.946044!4d-60.6382725?hl=en">Sarmiento 778, Rosario, Argentina</a></h3>
                </CardBlock>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggle}>OK</Button>
            </ModalFooter>
          </Modal>
      </div>
    );
  }
}

export default ModalArg;

//STYLES

var styles = {
  border: {
    border: '2px solid #fff',
    borderRadius: '8px'
  }
}
