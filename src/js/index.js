'use strict';

const e = React.createElement;

class Hello extends React.Component {
	render() {
		return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  	}
}

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(Hello, {toWhat: 'User'}, null),
	domContainer
);


// window.onload = function(){
// 	alert("oi");

// 	class Greetings extends React.Component
	// {
	// 	render()
	// 	{
	// 		return(
	// 			<h1>Greetings, {this.props.name}!</h1>
	// 		);
	// 	}
	// }

	// ReactDOM.render(
	// 	<Greetings name="Chris" />,
	// 	document.getElementById('app')
	// );
// };