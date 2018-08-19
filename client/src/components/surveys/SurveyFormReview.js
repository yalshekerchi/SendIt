import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions';

class SurveyFormReview extends Component {
  renderFields(values) {
    return formFields.map(({ name, label }) => (
        <div key={name} className='review-form-field'>
          <label>{label}</label>
          <div className='review-form-value'>{values[name]}</div>
        </div>
    ));
  }

  render() {
    return (
      <div>
        <h5>Please confirm your entries</h5>
        <br />
        <div className='card'>
          {this.renderFields(this.props.formValues)}
        </div>
        <br />
        <button className="yellow darken-3 btn-flat left white-text" onClick={this.props.onCancel}>
          Back
        </button>
        <button
          className="green btn-flat right white-text"
          onClick={() => this.props.submitSurvey(this.props.formValues, this.props.history)}
        >
          Send Servey
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
