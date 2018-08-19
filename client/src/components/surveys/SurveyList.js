import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (!this.props.surveys.length) {
      return (
        <h5>
          No surveys sent.
          <br/>
          Ensure that you have enough credits available and click the new survey button to create a new survey!
        </h5>
      )
    }

    return this.props.surveys.reverse().map(({
      _id, title, body, dateSent, yes, no
    }) => (
      <div className="card darken-1" key={_id}>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>
            {body}
          </p>
          <p className="right">
            Sent On: {new Date(dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a className="purple-darken-text">Yes: {yes}</a>
          <a className="purple-darken-text">No: {no}</a>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h4>Surveys:</h4>
        <div>
          {this.renderSurveys()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    surveys: state.surveys
  };
}

export default connect(mapStateToProps, actions)(SurveyList);
