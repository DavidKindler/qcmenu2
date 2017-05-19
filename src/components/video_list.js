import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
    const videos = props.videos;
    const videoItems = videos.map((video) => {
        return (React.createElement(VideoListItem, { onVideoSelect: props.onVideoSelect, key: video.etag, video: video }));
    });
    // console.log (videos)
    return (React.createElement("ul", { className: "col-md-6 list-group" }, videoItems));
};
export default VideoList;
