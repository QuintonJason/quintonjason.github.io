import React from 'react';


import snippets from '../../data/gists.json';
import Snippet from './Snippet';

const SnippetList = props => {

	const snippetsList = snippets.map(item => <Snippet key={item.index} {...item} />);
	return(
		<ul className="snippet-list">
			{snippetsList}
		</ul>
	)
}

export default SnippetList;
