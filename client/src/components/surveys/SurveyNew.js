import React, { Component } from 'react';
import { connect } from 'react-redux';

import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { form: state.form };
}

export default connect(mapStateToProps)(SurveyNew);
