import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title', noValueError: 'You must provide a title' },
  { label: 'Subject', name: 'subject', noValueError: 'You must provide a subject' },
  { label: 'Email Body', name: 'body', noValueError: 'You must provide a body' },
  { label: 'Recipient List', name: 'emails', noValueError: 'You must provide an email' }
];

class SurveyForm extends Component {
  async submitForm({
    title,
    subject,
    body,
    emails
  }) {
    const survey = { title, subject, recipients: emails, body };
    const res = await axios.post('/api/surveys', survey);
    console.log(res);
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
      FIELDS.map(({ name, label }) => {
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
      <form onSubmit={this.props.handleSubmit(this.submitForm)}>
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

  errors.emails = validateEmails(values.emails || '');
  FIELDS.forEach(({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
