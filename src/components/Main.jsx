import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import { StickyContainer } from 'react-sticky';

import NavigationBar from 'NavigationBar';

class Main extends React.Component {
  componentDidMount() {
    this.props.switchLanguage('eng');
  }
  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;
    if (content) {
      return (
        <div>
          <StickyContainer>
            <NavigationBar data={content} switchLanguage={switchLanguage} />
            <div>
              {React.cloneElement(this.props.children, { data: content })}
            </div>
          </StickyContainer>
        </div>
      );
    } else {
      return (
        <div>
          <h1>error</h1>
        </div>
      );
    }
  }
}

export default connect(
  state => ({ content: state.content }),
  dispatch => ({
    switchLanguage: lang => dispatch(actions.switchLanguage(lang))
  })
)(Main);
