import React from 'react';
var Slider = require('react-slick');
require ('./picks.component.scss');
require ('./home.variables.scss');

const styles={
  width: "100%",
}

export default React.createClass({
  render(){
    var settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1
     };
    return(
      <div className="top-picks-container">
        <div className="top-picks-title">
          our top picks
        </div>
        <div className="large-pad"></div>
        <Slider {...settings} className='slider'>
           <div className="slide-one">
             <img src="../../public/assets/images/luzon-18L.jpg" />
             <div className="slide-title">luzon 18l daypack - del dia</div>
             <div className="slide-subtitle">$49.95</div>
           </div>
           <div className="slide-two">
             <img src="../../public/assets/images/kusa.jpg" />
             <div className="slide-title">kusa jacket - (full zip) - unisex</div>
             <div className="slide-subtitle">$199.95</div>
             <div className="slide-color-swatch">

             </div>
           </div>
           <div className="slide-three">
             <img src="../../public/assets/images/roca.jpg" />
             <div className="slide-title">roca duffel</div>
             <div className="slide-subtitle">$99.95</div>
             <div className="slide-color-swatch">

             </div>
           </div>
           <div className="slide-four">
             <img src="../../public/assets/images/fuego.jpg" />
             <div className="slide-title">fuego down jacket - men's</div>
             <div className="slide-subtitle">$269.95</div>
             <div className="slide-color-swatch">

             </div>
           </div>
        </Slider>
      </div>
    )
  }
})
