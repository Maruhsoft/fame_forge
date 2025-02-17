import React, { useState } from 'react';
import axios from 'axios';

const VotingSystem = () => {
    const [voteCount, setVoteCount] = useState(0);
    const [message, setMessage] = useState('');

    const handleVote = async () => {
        if (voteCount >= 5) {
            setMessage('You have reached the voting limit.');
            return;
        }
        const response = await axios.post('/api/vote', { contestantId: selectedContestantId });
        if (response.data.success) {
            setVoteCount(voteCount + 1);
            setMessage('Vote submitted successfully!');
        } else {
            setMessage('Error submitting vote.');
        }
    };

    return (
        <div>
            <h1>Voting System</h1>
            <button onClick={handleVote}>Vote</button>
            <div>{message}</div>
            <div>Total Votes: {voteCount}</div>
        </div>
    );
};

export default VotingSystem;
