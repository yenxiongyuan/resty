// import React from 'react';

import { useState } from 'react';
import './Form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

const Form = (props) => {

  const { handleApiCall } = props;
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  
  
  const handleSubmit = (e) => {
    console.log(e.target[0].value)
    e.preventDefault();
    // const formData = {
    //   method: "GET",
    //   url: "https://pokeapi.co/api/v2/pokemon",
    // };
    handleApiCall({method, url});
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          {/* <input name="url" type="text" /> */}
          <input onChange={(e) => setUrl(e.target.value)} type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={(e) => setMethod('get')}>
            GET
          </span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
};

export default Form;
