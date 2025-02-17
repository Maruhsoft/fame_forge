import React from 'react';

const LiveStream = () => {
    return (
        <div>
            <h1>Live Stream</h1>
            <video controls>
                <source src="https://example.com/live-stream-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div>Chat feature coming soon!</div>
        </div>
    );
};

export default LiveStream;
