import React from 'react';
const VideoDetail = ({ video }) => {
    if (!video) {
        return React.createElement("div", null, "Loading...");
    }
    const title = video.snippet.title;
    const desc = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (React.createElement("div", { className: "video-detail col-md-6" },
        React.createElement("div", { className: "embed-responsive embed-responsive-16by9" },
            React.createElement("iframe", { className: "embed-responsive-item", src: url })),
        React.createElement("div", { className: "details" },
            React.createElement("div", null, title),
            React.createElement("div", null, desc))));
};
export default VideoDetail;
