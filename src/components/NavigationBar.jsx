import React from 'react';
import {Link} from 'react-router';
import {Sticky} from 'react-sticky';
import {Collapse, Navbar, Nav, NavItem} from 'reactstrap';

import TrailerModal from 'TrailerModal';
import ModalMenu from 'ModalMenu';

export class NavigationBar extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const data = this.props.data;
    let switchLanguage = this.props.switchLanguage;
    return(
      <div>
        <Sticky style={navStyle}>
          <Navbar inverse toggleable className="text-center">
            <ModalMenu onClick={this.toggle} data={data} switchLanguage={switchLanguage}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item">
                    <Link to='/' className="nav-link" style={links}>{data.page.navbar.home}</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/synopsis' className="nav-link" style={links}>{data.page.navbar.synopsis}</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/story' className="nav-link" style={links}>{data.page.navbar.story}</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/gallery' className="nav-link" style={links}>{data.page.navbar.gallery}</Link>
                  </li>
                  <li className="nav-item">
                    <TrailerModal />
                  </li>
                  <li className="nav-item">
                    <Link to='/contact' className="nav-link" style={links}>{data.page.navbar.contact}</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/dancelaw' className="nav-link" style={links}>{data.page.navbar.dancelaw}</Link>
                  </li>
                </ul>
              </Nav>
              <ul style ={lang} className="nav justify-content-end">
                <li style={itemLang} onClick={switchLanguage.bind(this, 'eng')}>
                  <a href="#" style={{color: '#fff'}} className="lang">Eng</a>
                </li>
                <li style={itemLang} onClick={switchLanguage.bind(this, 'esp')}>
                  <a href="#" style={{color: '#fff'}} className="lang">Esp</a>
                </li>
              </ul>
            </Collapse>
          </Navbar>
        </Sticky>
      </div>
    );
  }
}

export default NavigationBar;

//Styles

var lang = {
  color: '#fff',
  position: 'absolute',
  right: '1em'
}

var itemLang = {
  margin: '1.1em'
}

var navStyle = {
  backgroundColor: 'rgba(22,22,22,0.4)',
  height: '80px',
  zIndex: '999'
}

var links = {
  color: '#fff',
  fontSize: '1.5em',
  fontWeight: 'bold'
}
