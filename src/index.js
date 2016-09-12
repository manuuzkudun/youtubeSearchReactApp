import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
//import video_detail from '/src/components/video_detail';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyDO6csmDqhY8WzXEmHvLU98oC29j2JheYQ";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'one piece'}, videos => this.setState({videos}));
  }
  render(){
    return (
     <div>
        <SearchBar />
      <VideoList videos={this.state.videos}/>
      </div>
    ); 
  }

  
  
}



ReactDOM.render(<App/> ,document.querySelector('.container'));