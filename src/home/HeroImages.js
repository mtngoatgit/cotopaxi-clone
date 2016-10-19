import React from 'react';
require ('./home.component.scss');

export default React.createClass({
  render(){
    return(
      <div className="b">
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
      </div>
    )
  }
})
