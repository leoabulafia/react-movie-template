import React from 'react';
import FacebookIcon from '../images/fi-social-facebook.svg';
import MailIcon from '../images/fi-mail.svg';
import TelephoneIcon from '../images/fi-telephone.svg';

export class FichaTecnica extends React.Component{
  render() {
    const data = this.props.data;
    return(
      <div style={bg} className="text-center">
        <h1 style={title}>{data.page.credits.credits}</h1>
          <dl>
            <div>
                <dt>{data.page.credits.year}</dt>
                <dd>2016</dd>
                <dt>{data.page.credits.duration}</dt>
                <dd>{data.page.credits.duration1}</dd>
                <dt>{data.page.credits.country}</dt>
                <dd>{data.page.credits.country1}</dd>
                <dd>{data.page.credits.country2}</dd>
                <dt>{data.page.credits.director}</dt>
                <dd>Julia Martinez Heimann</dd>
                <dd>Konstantina Bousmpoura</dd>
                <dt>{data.page.credits.photography}</dt>
                <dd>Pigu Gómez (ADF)</dd>
                <dt>{data.page.credits.editor}</dt>
                <dd>Victoria Lastiri</dd>
                <dt>{data.page.credits.music}</dt>
                <dd>Analía Rosenberg</dd>
            </div>
            <div>
              <dt>{data.page.credits.sound}</dt>
              <dd>Nicolás Volonté</dd>
              <dt>{data.page.credits.graphicdesigner}</dt>
              <dd>Natalia Laclau</dd>
              <dt>{data.page.credits.stillphoto}</dt>
              <dd>Marcelo Raggone</dd>
              <dd>Nadia Villanueva</dd>
              <dd>Javier Fuentes</dd>
              <dd>Nicolás Fernández</dd>
              <dt>{data.page.credits.associateproducer}</dt>
              <dd>Panos Bisdas</dd>
              <dt>{data.page.credits.executiveproducer}</dt>
              <dd>Nancy Kokolaki</dd>
              <dd>Nikos Moustakas</dd>
              <dt>{data.page.credits.producers}</dt>
              <dd>Julia Martínez Heimann</dd>
              <dd>Konstantina Bousmpoura</dd>
            </div>
          </dl>
      </div>
    );
  }
}

export default FichaTecnica;

var bg = {
  minHeight: 'calc(100vh + 80px)',
  background: `rgb(42,42,42) no-repeat center center`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  paddingBottom: '2em',
  color: '#fff'
}

var title = {
  marginTop: '2em',
}
