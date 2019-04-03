'use strict';

const e = React.createElement;
const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is my Second Front End Project FreeCodeCamp
`


class App extends React.Component
{
	constructor (props)
	{
		super(props);
		this.state = {
			editor: false
		};

		this.handleEditor = this.handleEditor.bind(this);
	}

	handleEditor()
	{
		this.setState({
			editor: !this.state.editor
		});
	}

	render() 
	{
		return e('div', null, [e(Editor), e(Preview)] );
	}
}

const Editor = (props) => {
	return e('textarea', { id: 'editor' }, placeholder);
};

const Preview = (props) => {
	return e('div', { id: 'preview' }, 'oi mundo')
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(App),
	domContainer
);