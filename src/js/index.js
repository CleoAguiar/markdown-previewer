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
			markdown: placeholder,
			editor: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEditor = this.handleEditor.bind(this);
	}

	handleChange(el)
	{
		this.setState({ markdown: el.target.value });
	}

	handleEditor()
	{
		this.setState({
			editor: !this.state.editor
		});
	}

	render() 
	{
		return e('div', null, 
					[e(Editor, { markdown: this.state.markdown, onChange: this.handleChange }), 
			 	 	e(Preview, { markdown: this.state.markdown})] 
			 	);
	}
}

const Editor = (props) => {
	return e('textarea', { id: 'editor', value: props.markdown, onChange: props.onChange });
};

const Preview = (props) => {
	return e('div', { id: 'preview' }, props.markdown);
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(App),
	domContainer
);