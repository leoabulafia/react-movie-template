import React from 'react';

import {
  Collapse,
  CardBlock,
  Card,
  Button,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export class ModalArg extends React.Component {
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
    return (
      <div>
        <NavLink
          style={styles.border}
          className="text-white text-center"
          href="#"
          onClick={this.toggle}
        >
          Upcoming Events and Screenings
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} />
          <ModalBody>
            <Card>
              <CardBlock className="text-center">
                <h1>Pronto nuevas proyecciones</h1>
              </CardBlock>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>
              OK
            </Button>
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
};
