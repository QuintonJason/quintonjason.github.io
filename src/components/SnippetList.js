import React from 'react';
import styled from "styled-components"

import snippets from '../../data/gists.json';
import Snippet from './Snippet';

const Ul = ({ className, children }) => (
	<ul className={className}>
		{children}
	</ul>
);

const SnippetUl = styled(Ul)`
	list-style-type: none;
	padding-left: 0;
`;

const SnippetList = (props) => {

	const snippetsList = snippets.map(item => <Snippet key={item.index} {...item} />);
	return(
		
		<SnippetUl className="snippet-list">
			{snippetsList}
		</SnippetUl>
	)
}

export default SnippetList;
