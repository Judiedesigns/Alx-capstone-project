import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loader';

function Technology() {
    const api_token = import.meta.env.VITE_NEWS_API_TOKEN;

    const [technologyNews, setTechnologyNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTechNews = async () => {
            try {
                const res = await axios.get(
                    `https://api.thenewsapi.com/v1/news/all?api_token=${api_token}&language=en&categories=technology`
                );
                // console.log(res.data.data);
                setTechnologyNews(res.data.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch technology news articles. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTechNews();
    }, []);

    return (
        <div>
            <div className="space-y-6 lg:pt-24 pt-12 max-w-xl">
                <h2 className="text-[#0C0C0C] md:text-5xl text-4xl">Technology News</h2>
                <p className="text-[#0c0c0c] sm:text-base text-sm">Stay informed with real-time updates on news across Nigeria, and the world. Find up to date and reliable news </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Loading />
                </div>
            ) : (technologyNews.length > 0) && (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 mt-20'>
                    {technologyNews.map(article => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            )}
            {technologyNews.length === 0 && !loading && !error && (
                <div className="text-center mt-20 text-gray-500 text-lg">No technology news articles available at the moment.</div>
            )}
            {error && <div className="text-red-500 text-center mt-10">{error}</div>}
        </div>
    );
}

export default Technology;