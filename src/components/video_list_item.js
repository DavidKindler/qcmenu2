import React from 'react';
// const VideoListItem = (props) => {
const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.video;
    // return  <li>{video.snippet.title}</li>
    const title = video.snippet.title;
    return (React.createElement("li", { className: 'list-group-item', onClick: () => onVideoSelect(video) },
        React.createElement("div", { className: 'media-heading' }, title)));
};
export default VideoListItem;
