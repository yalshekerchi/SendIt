import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href='/auth/google'>
              <button className='btn purple darken-3'>
                Login With Google
              </button>
            </a>
          </li>
        );
      default:
        return (
          [
            <li key='1'>
              <a>
                <Payments />
              </a>
            </li>,
            <li key='2'>
              <a href='/api/logout'>
                <button className='btn purple darken-3'>
                  Logout
                </button>
              </a>
            </li>
          ]
        );
    }
  }

  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <Link
          to={this.props.auth ? '/surveys' : '/'}
          className="left brand-logo"
        >
          SendIt
        </Link>
        <ul id="nav-mobile" className="right">
          {this.renderContent()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
