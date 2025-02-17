import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeasonArchive = () => {
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        const fetchSeasons = async () => {
            const response = await axios.get('/api/seasons');
            setSeasons(response.data);
        };
        fetchSeasons();
    }, []);

    return (
        <div>
            <h1>Season Archive</h1>
            <ul>
                {seasons.map((season) => (
                    <li key={season.id}>{season.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SeasonArchive;
