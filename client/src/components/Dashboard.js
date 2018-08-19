import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
  render() {
    if (this.props.auth) {
      return (
        <div className="container">
          <h3>
            Welcome {this.props.auth.displayName}!
          </h3>
          <h5>
          {
            this.props.auth.credits
              ? `Credits Available: ${this.props.auth.credits}`
              : 'No Credits Remaining'
          }
          </h5>
          <br/>
          <SurveyList />
          <div className="fixed-action-btn" hidden={!this.props.auth.credits}>
            <Link
              to='/surveys/new'
              className="btn-floating btn-large purple darken-3"
              disabled={!this.props.auth.credits}
            >
              <i className="large material-icons">add</i>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div></div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
