import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loader';

function Business() {
    const api_token = import.meta.env.VITE_NEWS_API_TOKEN;

    const [businessNews, setBusinessNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBusinessNews = async () => {
            try {
                const res = await axios.get(
                    `https://api.thenewsapi.com/v1/news/all?api_token=${api_token}&language=en&categories=business`
                );
                // console.log(res.data.data);
                setBusinessNews(res.data.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch business news articles. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBusinessNews();
    }, []);

    return (
        <div>
            <div className="space-y-6 lg:pt-24 pt-12 max-w-xl">
                <h2 className="text-[#0C0C0C] md:text-5xl text-4xl">Business News</h2>
                <p className="text-[#0c0c0c] sm:text-base text-sm">Stay informed with real-time updates on news across Nigeria, and the world. Find up to date and reliable news </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Loading />
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 mt-20'>
                    {businessNews.map(article => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            )}
            {businessNews.length === 0 && !loading && !error && (
                <div className="text-center mt-20 text-gray-500 text-lg">No business news articles available at the moment.</div>
            )}
            {error && <div className="text-red-500 text-center mt-10">{error}</div>}
        </div>
    );
}

export default Business;