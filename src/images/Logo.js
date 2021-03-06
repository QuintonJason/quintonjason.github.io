import React, { Component } from "react";
import ReactDOM from "react-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
// import ReactDOM from 'react-dom';
// import { TimelineLite, Draggable, CSSPlugin, Power2, Power3 } from 'gsap';

// export default class Logo extends Component{
// 	constructor(props) {
//     super(props);
//     this.dragInit = this.dragInit.bind(this);
//   }
// 	componentDidMount(){
// 		console.log('this: ', this);
// 		this.dragInit();
// 	}
// 	dragInit = () => {
// 		Draggable.create(this.logo, {
// 		  type:"rotation",
// 		  throwProps:true
// 		});
// 	}
// 	render(){
// 		return(
// 			<svg id="svg" ref={(l) => (this.logo = l)} className={this.props.className} x="0px" y="0px" viewBox="0 0 283.9 193.7">
// 				<style type="text/css">
// 				</style>
// 				<rect fill="#41B649" x="342" y="-83.2" width="360" height="360"/>
// 				<g id="logo-wrapper">
// 					<path id="logo-j_1_" d="M142.6,0c17.5,8.3,32.4,21.2,43.1,37.1h60.6v96c0,19.6-10.5,25.1-28.9,25.1h-20.8l32.9,34.8 c30-2.9,54.4-15.6,54.4-65V0H142.6z"/>
// 					<path fill="#41B649" id="logo-q" d="M215.8,193.7l-39.5-41.8c10.8-15.6,17.2-34.6,17.2-55c0-53.4-43.3-96.7-96.7-96.7S0,43.5,0,96.9 s43.3,96.7,96.7,96.7c19.5,0,37.5-5.8,52.7-15.6l14.9,15.7H215.8z M96.7,155.9c-32.6,0-59-26.4-59-59s26.4-59,59-59s59,26.4,59,59 S129.3,155.9,96.7,155.9z"/>
// 				</g>
// 				<g id="logo-j" style={{display: 'none'}}>
// 					<path d="M522.6,0c17.5,8.3,32.4,21.2,43.1,37.1h60.6v96c0,19.6-10.5,25.1-28.9,25.1h-20.8l32.9,34.8 c30-2.9,54.4-15.6,54.4-65V0H522.6z"/>
// 					<path fill="#FFFFFF" d="M595.8,193.7l-39.5-41.8c10.8-15.6,17.2-34.6,17.2-55c0-53.4-43.3-96.7-96.7-96.7S380,43.5,380,96.9 s43.3,96.7,96.7,96.7c19.5,0,37.5-5.8,52.7-15.6l14.9,15.7H595.8z M476.7,155.9c-32.6,0-59-26.4-59-59s26.4-59,59-59s59,26.4,59,59 S509.3,155.9,476.7,155.9z"/>
// 				</g>
// 			</svg>
// 		)
// 	}
// }

const Logo = props => {
  const { className } = props;
  return (
    <svg className={className} x="0px" y="0px" viewBox="0 0 283.9 193.7">
      <style type="text/css" />
      <rect fill="#41B649" x="342" y="-83.2" width="360" height="360" />
      <g id="logo-wrapper">
        <path
          id="logo-j_1_"
          d="M142.6,0c17.5,8.3,32.4,21.2,43.1,37.1h60.6v96c0,19.6-10.5,25.1-28.9,25.1h-20.8l32.9,34.8 c30-2.9,54.4-15.6,54.4-65V0H142.6z"
        />
        <path
          fill="#41B649"
          id="logo-q"
          d="M215.8,193.7l-39.5-41.8c10.8-15.6,17.2-34.6,17.2-55c0-53.4-43.3-96.7-96.7-96.7S0,43.5,0,96.9 s43.3,96.7,96.7,96.7c19.5,0,37.5-5.8,52.7-15.6l14.9,15.7H215.8z M96.7,155.9c-32.6,0-59-26.4-59-59s26.4-59,59-59s59,26.4,59,59 S129.3,155.9,96.7,155.9z"
        />
      </g>
      <g id="logo-j" style={{ display: "none" }}>
        <path d="M522.6,0c17.5,8.3,32.4,21.2,43.1,37.1h60.6v96c0,19.6-10.5,25.1-28.9,25.1h-20.8l32.9,34.8 c30-2.9,54.4-15.6,54.4-65V0H522.6z" />
        <path
          fill="#FFFFFF"
          d="M595.8,193.7l-39.5-41.8c10.8-15.6,17.2-34.6,17.2-55c0-53.4-43.3-96.7-96.7-96.7S380,43.5,380,96.9 s43.3,96.7,96.7,96.7c19.5,0,37.5-5.8,52.7-15.6l14.9,15.7H595.8z M476.7,155.9c-32.6,0-59-26.4-59-59s26.4-59,59-59s59,26.4,59,59 S509.3,155.9,476.7,155.9z"
        />
      </g>
    </svg>
  );
};

export default Logo;
