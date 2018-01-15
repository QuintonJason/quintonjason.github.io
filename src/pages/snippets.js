import React, {Component} from 'react'
import Link from 'gatsby-link'

import SnippetList from '../components/SnippetList';

import Helmet from 'react-helmet';

export default class Snippets extends Component{
	constructor(){
		super()
		this.state = {
			snippets: []
		};
	}
	componentDidMount(){
		this.getSnippets()
		//update snippets state
		.then(responseData => {
			console.log('responseData', responseData);
			this.setState({ snippets: responseData })
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}
	async getSnippets(){
		let response = await fetch('https://api.github.com/users/QuintonJason/gists');
	  let data = await response.json();
	  return data;
	}
	render(){
		return(
			<div>
				<p className="h2">Snippets</p>
				<SnippetList data={this.state.snippets} />
			</div>
			
		)
	}
}
