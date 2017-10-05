import React from 'react';

import {Nav, NavbarToggler, Modal, ModalBody } from 'reactstrap';
import {Link} from 'react-router';

export class ModalMenu extends React.Component{
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
    const data = this.props.data;
    let switchLanguage = this.props.switchLanguage;
    return(
      <div>
        <NavbarToggler style={styles.toggler} right onClick={this.toggle} />
        <Modal style={styles.size} isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody style={styles.modal}>
              <Nav className="mx-auto" navbar>
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item">
                    <Link onClick={this.toggle} to='/' className="nav-link" style={styles.links}>{data.page.navbar.home}</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={this.toggle} to='/synopsis' className="nav-link" style={styles.links}>{data.page.navbar.synopsis}</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={this.toggle} to='/story' className="nav-link" style={styles.links}>{data.page.navbar.story}</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={this.toggle} to='/gallery' className="nav-link" style={styles.links}>{data.page.navbar.gallery}</Link>
                  </li>
                  <li className="nav-item" onClick={this.toggle}>
                    <Link onClick={this.toggle} to='/trailer' className="nav-link" style={styles.links}>Trailer</Link>
                  </li>
                  <li className="nav-item" onClick={this.toggle}>
                    <Link onClick={this.toggle} to='/contact' className="nav-link" style={styles.links}>{data.page.navbar.contact}</Link>
                  </li>
                  <li className="nav-item" onClick={this.toggle}>
                    <Link onClick={this.toggle} to='/dancelaw' className="nav-link" style={styles.links}>{data.page.navbar.dancelaw}</Link>
                  </li>
                  <ul className="nav justify-content-end">
                    <li  style={itemLang} onClick={switchLanguage.bind(this, 'eng')}>
                      <a href="#" style={{color: '#fff'}} className="lang">Eng</a>
                    </li>
                    <li style={itemLang} onClick={switchLanguage.bind(this, 'esp')}>
                      <a href="#" style={{color: '#fff'}} className="lang">Esp</a>
                    </li>
                  </ul>
                </ul>
              </Nav>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

export default ModalMenu;

var itemLang = {
  margin: '1.1em'
}

var styles = {
  toggler: {
    marginTop: '12px'
  },
  links: {
    color: '#fff',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  size: {
    zIndex: '9999',
    margin: '0'
  },
  modal: {
    backgroundColor: '#333'
  },
  link: {
    color: '#fff',
    fontSize: '1.5em',
    fontWeight: 'bold'
  }
}
