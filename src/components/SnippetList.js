import React from 'react';
import Snippet from './Snippet'

const SnippetList = props => {

	const fetchedList = props.data;
	let snippets = fetchedList.map(snippet => 
		<Snippet url={snippet.url} description={snippet.description} key={snippet.id}/>
	);
	return(
		<ul className="snippet-list">
			{snippets}
		</ul>
	)
}

export default SnippetList