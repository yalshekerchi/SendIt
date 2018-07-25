import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  constructor(props) {
    super(props);
  }

  renderField(field) {
    const { input, label, meta: { error, touched } } = field;

    return (
      <div>
        <label>{label}</label>
        <input {...input} placeholder={label} style={{ marginBottom: '5px' }}/>
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  }

  renderFields() {
    return (
      formFields.map(({ name, label }) => {
        return <Field
          key={name}
          name={name}
          type="text"
          component={this.renderField}
          label={label}
        />;
      })
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
        <Link to='/surveys'>
          <button className="red btn-flat left white-text">
            Cancel
          </button>
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');
  formFields.forEach(({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  detroyOnUnmount: false
})(SurveyForm);
