import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="main-landing">
          <h1>SendIt</h1>
          <h3>Easily collect feedback for your startup</h3>
          <br/>
          <a href='/auth/google'>
            <button className='btn purple darken-3'>
              Get Started Now
            </button>
          </a>
        </div>
        <div class="row card promotion-table">
          <div class="col s12 m4">
            <div class="icon-block">
              <h5 class="center"><i class="material-icons purple-darken-text">flash_on</i></h5>
              <h5 class="center">Fast and Simple</h5>

              <p class="light">We provide a very simple and intuitive interface which allows users to quickly create and send surveys in minutes!</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h5 class="center"><i class="material-icons purple-darken-text">group</i></h5>
              <h5 class="center">Client Experience Focused</h5>

              <p class="light">We send your clients simple surveys which they can respond to directly from their email client in order to ensure the highest response rate.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h5 class="center"><i class="material-icons purple-darken-text">settings</i></h5>
              <h5 class="center">Affordable Pricing</h5>

              <p class="light">No subscriptions or commitments needed to use our service. Our credit system allows you to pay only for the emails you actually need to send.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
