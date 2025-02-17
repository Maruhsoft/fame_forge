import React from 'react';

const StreamingManagement = () => {
    return (
        <div>
            <h2>Streaming Management</h2>
            <form>
                <input type="text" placeholder="Streaming Link" required />
                <button type="submit">Add Streaming Link</button>
            </form>
        </div>
    );
};

export default StreamingManagement;
