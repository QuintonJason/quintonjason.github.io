import React from 'react';

const Snippet = (props) => {
	return(
		<li className="snippet-wrapper">
			<a href={props.url}>{props.description}</a>
		</li>
	)
}

export default Snippet