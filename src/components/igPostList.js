import React from 'react';
import styled from "styled-components"

import posts from '../../data/igPosts.json';
import IgPost from './igPost';

const Ul = ({ className, children }) => (
	<ul className={className}>
		{children}
	</ul>
);

const IgPostUl = styled(Ul)`
	list-style-type: none;
	padding-left: 0;
`;

const IgPostList = (props) => {

	const igPostList = posts.map(item => <IgPost key={item.index} {...item} />);
	return(
		
		<IgPostUl className="snippet-list">
			{igPostList}
		</IgPostUl>
	)
}

export default IgPostList;
