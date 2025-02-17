import React from 'react';

const VotingManagement = () => {
    return (
        <div>
            <h2>Voting Management</h2>
            <form>
                <input type="number" placeholder="Daily Vote Limit" required />
                <button type="submit">Update Voting Rules</button>
            </form>
        </div>
    );
};

export default VotingManagement;
