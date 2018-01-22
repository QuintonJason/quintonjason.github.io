import React from 'react';

const Snippet = (props) => {
	const {id, description, username, avatar, time} = props;
	return(
		<li className="snippet-wrapper">
			<a data-id={props.id} href={`/snippets/${props.id}`}>{props.description}</a>
		</li>
	)
}

export default Snippet