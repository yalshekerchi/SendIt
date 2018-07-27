import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(({
      _id, title, body, dateSent, yes, no
    }) => (
      <div className="card darken-1" key={_id}>
        <div className="card-content">
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
            <a>Yes: {yes}</a>
            <a>No: {no}</a>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h5>Surveys:</h5>
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
