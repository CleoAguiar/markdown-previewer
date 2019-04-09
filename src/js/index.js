'usr marked';
'use strict';

const e = React.createElement;
const placeholder = 
`Heading
=======

## Sub-heading

Text attributes *italic*, **bold**,~~strikethrough~~ .

[I'm an inline-style link](https://github.com/CleoAguiar)

Inline code has back-ticks around it.
${'```'}python
s = "Python syntax highlighting"
print s
${'```'}

Shopping list:

* apples
* oranges
* pears

Numbered list:

1. apples
2. oranges
3. pears

> Markdown uses email-style > characters for blockquoting.

![Image](https://github.com/dcurtis/markdown-mark/blob/master/png/66x40.png?raw=true "icon")

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
					[e(Header),
					 e(Editor, { markdown: this.state.markdown, onChange: this.handleChange }), 
			 	 	 e(Preview, { markdown: this.state.markdown}),
			 	 	 e(Footer)] 
			 	);
	}
}

const Header = () => {
	return e('div', { id: 'header' },
			[e('h2',null, 'Welcome to my React Markdown Previewer!'),
			e('p', null, 'This page is my Second Front End Project FreeCodeCamp using React')]
			);
};

const Editor = (props) => {
	return e('textarea', { id: 'editor', value: props.markdown, onChange: props.onChange });
};

const Preview = (props) => {
	return e('div', { id: 'preview', dangerouslySetInnerHTML: {__html: marked(props.markdown, {sanitize: true}) } });
};

const Footer = () => {
	return e('div', { id: 'footer' }, 
		[ String.fromCharCode(169), // copyright symbol &#169;
		  ' 2019 ' ,
		  e('a', {href: 'http://cleoaguiar.github.io'}, 'Cleo Aguiar'), 
		  '. All rights reserved.']
		);
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(App),
	domContainer
);