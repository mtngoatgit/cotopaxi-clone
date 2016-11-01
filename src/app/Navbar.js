import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router'
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';
require ('./navbar.component.scss');

let RadiumLink = Radium(Link);

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '15px',
    height: '10px',
    left: '15px',
    top: '22px'
  },
  bmBurgerBars: {
    background: '#666'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#666',
    textTransform: "capitalize",
    zIndex: '9'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

//Code for the NavBar
class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  render = () => {
    return (

      <header className="header">
        <Menu styles={ styles }>
          {/* <a id="home" className="menu-item" href="/">Home</a>
          <RadiumLink className="menu-item" to="/host">Become a Host</RadiumLink>
          <a id="contact" className="menu-item" href="/signup">Sign Up</a>
          <a id="login" className="menu-item" href="/auth/facebook">Login</a> */}
          <div className="menu-parent" style={{zIndex: '9'}}>
          <div className="menu-search-box">
            <input type="text"
            placeholder="🔍 What are you looking for?"
            style={{width: '100%'}}
            />
          </div>
          <div className="menu-block">
            <div className="menu-type">backpacks</div>
            <div>lifestyle bags</div>
            <div>technical backpacks</div>
            <div>luzon del día</div>
          </div>
            <div className="menu-block">
              <div className="menu-type">men's</div>
              <div>jackets</div>
              <div>training</div>
              <div>tees</div>
              <div>bottoms</div>
            </div>
            <div className="menu-block">
              <div className="menu-type">women's</div>
              <div>jackets</div>
              <div>training</div>
              <div>tees</div>
              <div>bottoms</div>
            </div>
            <div className="menu-block">
              <div className="menu-type">unisex</div>
              <div>tolimán wool hoodie</div>
              <div>teca windbreaker</div>
              <div>sasa french terry crew</div>
              <div>kusa collection</div>
              <div>tianjin down jacket</div>
            </div>
            <div className="menu-block">
              <div className="menu-type">gear</div>
              <div>inti 2 tent</div>
              <div>techo 3 tent</div>
              <div>sleeping bags</div>
              <div>kusa blanket</div>
            </div>
            <div className="menu-block">
              <div className="menu-type">accessories</div>
              <div>water bottle</div>
              <div>del día dopp kit</div>
              <div>mugs</div>
              <div>hats</div>
              <div>do good decal</div>
              <div>gift cards</div>
            </div>
            <div className="menu-block">
              <div className="menu-type">collections</div>
              <div>new</div>
              <div>the kusa collection</div>
              <div>the camina collection</div>
              <div>travel</div>
              <div>commuter</div>
              <div>fall sale</div>
            </div>
            <div className="menu-block">

            </div>
            <div className="menu-block">
              <div className="menu-type">Impact</div>
              <div>about</div>
              <div>our grantees</div>
              <div>factories</div>
              <div>b corp certification</div>
              <div>refugee coding</div>
              <div>giving guide</div>
            </div>
            <div className="menu-block">
              <div className="menu-type">Questival</div>
              <div>phoenix 11/11</div>
              <div>vegas 2017</div>
              <div>Salt Lake City 2017</div>
              <div>Denver 2017</div>
              <div>boston 2017</div>
              <div>portland 2017</div>
              <div>seattle 2017</div>
              <div>chicago 2017</div>
              <div>san diego 2017</div>
              <div>san francisco 2017</div>
              <div>questival faq</div>
            </div>
            <div className="menu-block">
              <div className="menu-type">blog</div>
              <div>adventure</div>
              <div>behind the design</div>
              <div>camp eats</div>
              <div>explorer's guide</div>
              <div>impact</div>
            </div>
            <div className="menu-block">
              <div>sign in</div>
              <div>help</div>
              <div>1-844-268-6729</div>
            </div>
            <div className="menu-block">
              <div>retail store</div>
              <div>jobs</div>
              <div>affiliate program</div>
              <div>give $20 get $20</div>
              <div>group sales</div>
              <div>product donations</div>
            </div>
            <div className="menu-block">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Menu>
        <div className="menu">
          <Link to="/host"><span className="become-a-host">Become a Host</span></Link>
          <a href="/help" className="left-border-menu">Help</a>
          <a href="/signup" className="left-border-menu">Sign Up</a>
        </div>

      </header>
    );
  }

};

export default Navbar;
