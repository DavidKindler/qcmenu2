import React from 'react';

// const VideoListItem = (props) => {
const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    // return  <li>{video.snippet.title}</li>
    const title = video.snippet.title;

    return  (
        <li className='list-group-item' onClick={() => onVideoSelect(video)}>
            <div className='media-heading'>{title}</div>
        </li>
    )
};

export default  VideoListItem;