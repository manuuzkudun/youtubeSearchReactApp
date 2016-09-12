import React from 'react';

const VideoListItem = ({video}) => {
  var imgUrl = video.snippet.thumbnails.default.url;
  var title = video.snippet.title;
  
  return (<li className="list-group-item">
            <div className= "video-list media">
              <div className="media-left">
                 <img src={imgUrl} className="media-object"/>
              </div>
              <div className="media-body">
                <div className="media-heading">{title}</div>
              </div>
            </div>
          </li>
         );
}


export default VideoListItem;