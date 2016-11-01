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
            DO GOOD
          </div>
          <div className="slide-one-subtitle">
            Spend $100, get a DO GOOD Tee.
          </div>
          <div className="slide-one-text">
            <span style={{width: "100%"}}>Limited time offer. Cannot be combined with</span>
            <span style={{width: "100%"}}>other offers. Excludes events.</span>
          </div>

          <div className="slide-one-shop_now">
            <div className="slide-one-shop_now-inner">
            Shop Now
            </div>
          </div>
        </div>
      </div>
      <div className="hero-down_arrow">
        <MuiThemeProvider>
          <Arrow style={{ color: "#fff", height: "50px", width: "50px", marginBottom: "18px" }} />
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
})
