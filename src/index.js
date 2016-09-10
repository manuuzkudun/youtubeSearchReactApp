import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//import video_detail from '/src/components/video_detail';
//import video_list from '/src/components/video_list';

const API_KEY = "AIzaSyDO6csmDqhY8WzXEmHvLU98oC29j2JheYQ";

// Create a component (HTML) using JSX
const App = () => {
  return (
     <div>
        <SearchBar />
      </div>
  );
}


// Insert in the DOM
// We use ReactDOM library
ReactDOM.render(<App/> ,document.querySelector('.container'));