import React from 'react'

const FacebookIcon = (props) => {
	const { className, fillColor } = props;
	return (
		<svg className={className} viewBox="0 0 1024 1024">
			<path fill={fillColor} d="M575.87 1024h-191.87v-512h-128v-176.45l128-0.058-0.208-103.952c0-143.952 39.034-231.54 208.598-231.54h141.176v176.484h-88.23c-66.032 0-69.206 24.656-69.206 70.684l-0.262 88.324h158.69l-18.704 176.45-139.854 0.058-0.13 512z"/>
		</svg>
	);
};

export default FacebookIcon;
