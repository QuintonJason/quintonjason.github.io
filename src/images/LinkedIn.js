import React from 'react'

const LinkedInIcon = (props) => {
	const { className, fillColor } = props;
	return (
		<svg className={className} viewBox="0 0 1024 1024">
			<path fill={fillColor} d="M852 0h-680c-94.6 0-172 77.4-172 172v680c0 94.6 77.4 172 172 172h680c94.6 0 172-77.4 172-172v-680c0-94.6-77.4-172-172-172zM384 832h-128v-448h128v448zM320 320c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM832 832h-128v-256c0-35.346-28.654-64-64-64s-64 28.654-64 64v256h-128v-448h128v79.472c26.398-36.264 66.752-79.472 112-79.472 79.53 0 144 71.634 144 160v288z"/>
		</svg>
	);
};

export default LinkedInIcon;
