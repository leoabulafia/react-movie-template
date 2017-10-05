import React from 'react';
import FacebookIcon from '../images/fi-social-facebook.svg';
import MailIcon from '../images/fi-mail.svg';
import TelephoneIcon from '../images/fi-telephone.svg';
import bgImage from '../images/pic16.jpg';

import Credits from 'Credits';

export class Contact extends React.Component{
  render() {
    const data = this.props.data;
    return(
      <div>
        <div style={bg} className="bg">
          <div style={bgLayer}>
          </div>
        </div>
        <div style={bgStyle} className="text-center">
          <div style={description}>
            <h1 style={title}>{data.page.contact.contact}</h1>
            <ul className="list-group col-lg-8 mx-auto">
              <li className="list-group-item">
                <a target="_blank" href="https://www.facebook.com/workingdancers/" className="list-group-item list-group-item-action">
                  <img style={img} src={FacebookIcon} alt="Facebook"/>{data.page.contact.facebook}</a>
              </li>
            </ul>
            <p style={title}>Julia Martínez Heimann</p>
            <ul className="list-group col-lg-8 mx-auto">
              <li className="list-group-item">
                <a target="_blank" href="mailto:julheim@gmail.com" className="list-group-item list-group-item-action">
                  <img style={img} src={MailIcon} alt="Facebook"/>julheim@gmail.com</a>
              </li>
            </ul>
            <p style={title}>Konstantina Bousmpoura</p>
            <ul className="list-group col-lg-8 mx-auto">
              <li className="list-group-item">
                <a target="_blank" href="mailto:konstantinab@gmail.com" className="list-group-item list-group-item-action">
                  <img style={img} src={MailIcon} alt="Facebook"/>konstantinab@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <Credits />
      </div>

    );
  }
}

export default Contact;

var bg = {
  minHeight: '60vh',
  backgroundImage: `url(${bgImage})`
}

var bgLayer = {
  backgroundColor: 'rgba(0, 0, 128, 0.1)',
  width: '100%',
  minHeight: 'calc(60vh + 80px)'
}

var bgStyle = {
  color: '#fff'
}

var img = {
  maxWidth: '50px'
}

var title = {
  paddingTop: '2em',
}

var description = {
  fontSize: '1em',
  backgroundColor: '#2a2a2a',
  paddingBottom: '2em'
}
