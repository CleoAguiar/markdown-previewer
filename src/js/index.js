'use strict';

const e = React.createElement;
const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is my Second Front End Project FreeCodeCamp
`

class Hello extends React.Component 
{
	render() {
		return e('div', null, `Hello ${this.props.toWhat}`);
  	}
}

class App extends React.Component
{
	constructor (props)
	{
		super(props);
		this.state = {
			editor: false
		};
	}

	render() 
	{
		if (this.state.editor)
			return 'Your editor';

		return e(
			'textarea',
			{ id: 'editor'},
			placeholder
		);
	}
}

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(App),
	domContainer
);