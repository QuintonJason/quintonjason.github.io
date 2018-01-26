import React from 'react';
import styled from "styled-components"

const Li = ({ className, children }) => (
	<li className={className}>
		{children}
	</li>
)

const SnippetLi = styled(Li)`
	margin-bottom: 1rem;
`;

const Snippet = (props) => {
	const {id, description, username, avatar, time} = props;
	return(
		<SnippetLi className="snippet-wrapper">
			<a data-id={props.id} href={`/snippets/${props.id}`}>{props.description}</a>
		</SnippetLi>
	)
}

export default Snippet