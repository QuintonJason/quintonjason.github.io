async function fetchAsync () {
  let response = await fetch('https://api.github.com/users/QuintonJason/gists');
  let data = await response.json();
  return data;
}


// const 
// import React from 'react';
// import Link from 'gatsby-link';

// const Snippets = (props) => {
//   const { url, external_url } = props
//   const link = external_url ? <a href={external_url} target="_blank">Read More</a> : <Link to={url}>Read More</Link>;
//   return (

//     <div className="post-landing-link"> 
//       {link}
//     </div>

//   );
// };



// export default Snippets;

// class Snippets extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   },
//   getSnippets(){

//   },
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// export default Snippets;