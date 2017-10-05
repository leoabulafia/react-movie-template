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
                  <h1>Working Bodies</h1>
                  <h2>The Dancer as Workforce</h2>
                  <h3>Workshop with Konstantina Bousmpoura and Sofia Mavragani</h3>
                  <p>Οpen to working artists and non-artists, unemployed people and young people
                    who are concerned about their working future.</p>
                  <p>Limit of participants: 15 people</p>
                  <p>A strict priority list will be kept.</p>
                  <h2>15 - 17.07.2017 | 12:00 - 15:00 </h2>
                    <h2>ZOUMBOULEIO MEGARON, KALAMATA</h2>
                  <h3><a href="http://www.kalamatadancefestival.gr/index.php/en/ducational-activitiesen#working-bodiesthe-dancer-as-workforce-workshop-with-sophia-mavragani-and-konstantina-bousmpoura" target="_blank">More Info</a></h3>
                </CardBlock>
              </Card>
              <Card>
                <CardBlock className="text-center">
                  <h1>Screening of Working Dancers</h1>
                  <h2>17.7.2017 </h2>
                  <h2>Kalamata Dance Megaron - Forecourt</h2>
                  <h2>22:00 hs</h2>
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
