import React, { useState, useEffect, use } from 'react';
// import details from '../assets/detailsPhoto.png';
// import details2 from '../assets/blog-details-2.png';
import NewsCard from '../components/NewsCard';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loader';

const BlogDetails = () => {
    const { id } = useParams();
    const api_token = import.meta.env.VITE_NEWS_API_TOKEN;
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [similarNews, setSimilarNews] = useState([]);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await axios.get(
                    `https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=${api_token}`
                );
                // console.log(res.data);
                setArticle(res.data);
            } catch (err) {
                console.error('Error fetching article details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id, api_token]);

    const formattedDate = new Date(article.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const date = new Date(article.published_at);
    const refindedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;


    useEffect(() => {
        const fetchSimilarNews = async () => {
            if (!article?.published_at) return;

            console.log('Article Published At:', article.published_at);
            try {
                const res = await axios.get(
                    `https://api.thenewsapi.com/v1/news/similar/${id}?api_token=${api_token}&language=en&published_on=${refindedDate}`
                );
                // console.log('Similar News:', res.data.data);
                setSimilarNews(res.data.data);
            } catch (err) {
                console.error('Error fetching similar news:', err);
            }
        };
        fetchSimilarNews();
    }, [article?.published_at, api_token]);

    return (
        <>
        {loading ? (
            <div className="flex justify-center items-center h-screen w-full">
                <Loading />
            </div>
        ) : (   
            <section className='max-w-4xl mx-auto'>
                <p className="text-[#2C2F24] font-semibold md:text-4xl text-3xl max-w-4xl mx-auto sm:mt-16 mt-10 text-center">{article.title}</p>

                <div className='flex justify-between items-center gap-6 mt-12'>
                    <h3 className='sm:text-lg text-base leading-6'>Source: <span className='text-blue-500 underline'><Link to={article.source}>{article.source}</Link></span></h3>
                    <p className='text-[#414536] sm:text-base text-sm leading-6'> {formattedDate}</p>
                </div>

                <div>
                    <img src={article.image_url} alt={article.title} className='max-w-5xl w-full h-auto mx-auto md:mb-16 mb-10 mt-6' />
                </div>

                <div className='w-full'>

                    <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                        {article.description}
                    </p>
                </div>

                <p className='py-4'>Read details on <span className='text-blue-500 underline'><Link to={article.url} target='_blank'>{article.url}</Link></span></p>
            </section>
        )}
        
        <Link to="/" className='max-w-4xl mx-auto block mt-10 mb-6 text-blue-500'>&larr; Back to Home</Link>

            {similarNews.length > 0 && (
                <section className='md:pt-20 pt-10 pb-6 md:space-y-16 space-y-8 max-w-4xl mx-auto'>
                    <div className='max-w-2xl mx-auto text-center space-y-6'>
                        <h2 className='text-[#2C2F24] capitalize md:text-5xl text-3xl font-medium'>read more articles</h2>
                        <p className='text-[#414536] leading-5'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {similarNews
                            .slice(0, 3)
                            .map(article => (
                                <NewsCard key={article.id} article={article} />
                            ))
                        }
                    </div>
                </section>
        // ) : (
        //     <section className='md:pt-20 pt-10 pb-6 md:space-y-16 space-y-8 max-w-4xl mx-auto'>
        //         <div className='max-w-2xl mx-auto text-center space-y-6'>
        //             <h2 className='text-[#2C2F24] capitalize md:text-5xl text-3xl font-medium'>No similar articles found</h2>
        //             <p className='text-[#414536] leading-5'>Sorry, we couldn't find any similar articles.</p>
        //         </div>
        //     </section>
            )}
        </>
    );
};

export default BlogDetails;