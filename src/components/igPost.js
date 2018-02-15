import React from 'react';
import styled from "styled-components"

const Li = ({ className, children }) => (
	<li className={className}>
		{children}
	</li>
)

const IgPostLi = styled(Li)`
	margin-bottom: 1rem;
`;

const IgPost = (props) => {
	const {id, caption, date, image, media, likes} = props;
	return(
		<IgPostLi className="snippet-wrapper">
			<a data-id={props.id} href={`/calligraphy/${props.id}`}>
				<img src={`/${props.media}`} alt={props.caption}/>
				<p>{props.caption}</p>
			</a>
		</IgPostLi>
	)
}

export default IgPost