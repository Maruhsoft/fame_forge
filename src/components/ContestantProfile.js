import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContestantProfile = ({ match }) => {
    const [contestant, setContestant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContestant = async () => {
            const response = await axios.get(`/api/contestants/${match.params.id}`);
            setContestant(response.data);
            setLoading(false);
        };
        fetchContestant();
    }, [match.params.id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>{contestant.name}</h1>
            <p>{contestant.bio}</p>
            <img src={contestant.image} alt={contestant.name} loading="lazy" />
            <div>
                <h2>Achievements</h2>
                <ul>
                    {contestant.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContestantProfile;
