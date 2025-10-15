import { useEffect, useState } from 'react';
import heroImg from '../assets/heroImg.png';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loader';
import axios from 'axios';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api_token = import.meta.env.VITE_NEWS_API_TOKEN;
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://api.thenewsapi.com/v1/news/all?api_token=${api_token}&language=en&limit=20`
        );
        // console.log(res.data.data);
        setNews(res.data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch news articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // if (error) {
  //   return <div className="text-red-500 text-center mt-10">{error}</div>;
  // }

  return (
    <>
      <section className='flex items-center justify-between flex-col md:flex-row sm:gap-20 gap-10 py-16'>
          <div className='space-y-4'>
              <div className='px-3 py-1.5 bg-[#FFCDCC] w-fit mx-auto rounded-[8px] text-[#3C324D] text-sm font-semibold'>General News</div>
              <h2 className='text-[#0C0C0C] text-center md:text-left md:text-[48px] text-3xl font-normal'>Stay curious, stay informed</h2>
              <p className='text-[#0C0C0C] text-center md:text-left sm:text-lg text-base font-normal leading-7'>Stay informed with real-time updates on news across Nigeria, and the world. Find up to date and reliable news.</p>
          </div>
          <div>
              <img src={heroImg} alt="hero-image" className='w-[500px]'/>
          </div>
      </section>

      <section className=''>
        <div>
          <select className='border border-[#E2E2E1] rounded-[4px] text-[#021720] font-normal text-sm leading-3 px-4 py-2.5 mb-6 w-fit block'>
            <option>All topics</option>
            <option>Business</option>
            <option>Politics</option>
            <option>Sport</option>
          </select>
        </div>
        <div className='flex items-center justify-center'>
          {loading ? (
            <Loading />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 mt-20'>
              {news.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
          {error && <div className="text-red-500 text-center mt-10">{error}</div>}
        </div>
      </section>
    </>
  );
};
//0zbaAHI3MqCTWkGPeh49F87aYPLsQ7TM3BKQ1AnS
export default Home;