import React from 'react';
import HeroImages from './HeroImages';
import TopPicks from './TopPicks';
import OurTop from './OurTop';
import Luzon from './LuzonDelDia';
import WhoWeAre from './WhoWeAre';
import Aventuras from './Aventuras';
import Get20 from './Get20';
require ('./home.component.scss');
require ('./picks.component.scss');
require ('./home.variables.scss');

export default React.createClass({
  render(){
    return (
      <div>
        <HeroImages />
        <TopPicks />
        <Luzon />
        <WhoWeAre />
        <Aventuras />
        <Get20 />
      </div>
    )
  }
})
