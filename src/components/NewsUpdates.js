import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsUpdates = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get('/api/news');
            setNews(response.data);
        };
        fetchNews();
    }, []);

    return (
        <div>
            <h1>News Updates</h1>
            <ul>
                {news.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default NewsUpdates;
