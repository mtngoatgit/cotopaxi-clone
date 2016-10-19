import React from 'react';


export default React.createClass({
render(){
    return (
      <div>
        <div className="header-container">
          <div className="header-top">
            {/* <div className="desktop-header-nav">

            </div> */}
            <div className="mobile-header-nav">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="header-logo">
              <img style={{width: "100%"}}src="../../public/assets/images/logo.png" alt="cotopaxi" />
            </div>
            <div className="header-cart-container">
              <div className="header-help">
                <img style={{width: "100%"}} src="../../public/assets/images/nav_help.png" alt="help" />
              </div>
              {/* <div className="header-login">

              </div> */}
              <div className="header-cart">
                <img style={{width: "100%"}} src="../../public/assets/images/nav_cart.png" alt="cart" />
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-free-shipping">
              Free Shipping on Orders Over $50+
            </div>
            <div className="header-spend-hundred">
              Spend $100, get a free Do Good T-Shirt.
            </div>
          </div>
        </div>
      </div>
    )
}
})
