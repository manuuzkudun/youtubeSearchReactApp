import React from 'react';
import ReactDOM from 'react-dom';


// Create a component (HTML) using JSX
const App = () => {
  return <div> Hi! </div>;
}


// Insert in the DOM
// We use ReactDOM library
ReactDOM.render(<App/> ,document.querySelector('.container'));