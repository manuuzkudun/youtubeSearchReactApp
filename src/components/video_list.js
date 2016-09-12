import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = props => {
  var videoItems = props.videos.map( video => <VideoListItem video={video} key={video.etag} />);
  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
  
};


export default VideoList;