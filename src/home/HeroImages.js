import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
require ('./home.component.scss');

export default React.createClass({
  render(){
    return(
      <div className="hero-container">
      <div className="hero-parent">
        <div className="mobile-hero-image">
          <div className="slide-one-title">
            the libre sweater
          </div>
          <div className="slide-one-subtitle">
            Insulator.
          </div>
          <div className="slide-one-subtitle">
            Outer Layer.
          </div>
          <div className="slide-one-subtitle">
            Epic Enabler.
          </div>

          <div className="slide-one-back_now">
            <div className="slide-one-back_now-inner">
            Back Now
            </div>
          </div>

          <div className="kickstarter-title">
            KICKSTARTER
          </div>
        </div>
      </div>
      <div className="hero-down_arrow">
      </div>
      </div>
    )
  }
})
