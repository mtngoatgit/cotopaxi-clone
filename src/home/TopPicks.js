import React from 'react';
var Slider = require('react-slick');
require ('./picks.component.scss');
require ('./home.variables.scss');

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
           <div>
             <img src="../../public/assets/images/luzon-18L.jpg" className="luzon-carousel"/>
           </div>
           <div>
             <img src="../../public/assets/images/luzon-18L.jpg" className="luzon-carousel"/>
           </div>
           <div>
             <img src="../../public/assets/images/luzon-18L.jpg" className="luzon-carousel"/>
           </div>

        </Slider>

      </div>
    )
  }
})
