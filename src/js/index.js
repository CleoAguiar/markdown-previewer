'usr marked';
'use strict';

const e = React.createElement;
const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is my Second Front End Project FreeCodeCamp

Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**,~~strikethrough~~ .

Shopping list:

* apples
* oranges
* pears
Numbered list:

1. apples
2. oranges
3. pears

The rain---not the reign---in
Spain.
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
			 	 	e(Preview, { markdown: this.state.markdown}) ] 
			 	);
	}
}

const Editor = (props) => {
	return e('textarea', { id: 'editor', value: props.markdown, onChange: props.onChange });
};

const Preview = (props) => {
	return e('div', { id: 'preview', dangerouslySetInnerHTML: {__html: marked(props.markdown, {sanitize: true}) } });
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(App),
	domContainer
);