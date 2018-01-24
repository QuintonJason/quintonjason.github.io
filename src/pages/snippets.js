import React from 'react'
import Link from 'gatsby-link'

import SnippetList from '../components/SnippetList';

import Helmet from 'react-helmet';

const Snippets = (props) => {
	return(
			<div>
				<p className="h2">Snippets</p>
				<SnippetList  />
			</div>
			
	)
}

export default Snippets