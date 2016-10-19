import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/Home.js';
import Header from './Header';
import Footer from './Footer';

const App = React.createClass({
	render(){
		return (
			<div>
        <Header />
        <Home />
        <Footer />
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));
