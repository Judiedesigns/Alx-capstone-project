import { useEffect, useState } from 'react';
import heroImg from '../assets/heroImg.png';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loader';
import axios from 'axios';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('all');

  const api_token = import.meta.env.VITE_NEWS_API_TOKEN;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://api.thenewsapi.com/v1/news/all?api_token=${api_token}&language=en&limit=20`;

        if (selectedTopic !== 'all') {
          url += `&categories=${selectedTopic.toLowerCase()}`;
        }

        const res = await axios.get(url);
        setNews(res.data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch news articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedTopic]);

  return (
    <>
      <section className='flex items-center justify-between flex-col md:flex-row sm:gap-20 gap-10 py-16'>
        <div className='space-y-4'>
          <div className='px-3 py-1.5 bg-[#FFCDCC] w-fit mx-auto rounded-[8px] capitalize text-[#3C324D] text-sm font-semibold'>
            {selectedTopic === 'all' ? 'general news' : `${selectedTopic} News`}
          </div>
          <h2 className='text-[#0C0C0C] text-center md:text-left md:text-[48px] text-3xl font-normal'>
            Stay curious, stay informed
          </h2>
          <p className='text-[#0C0C0C] text-center md:text-left sm:text-lg text-base font-normal leading-7'>
            Stay informed with real-time updates on news across Nigeria and the world. Find up-to-date and reliable news.
          </p>
        </div>
        <div>
          <img src={heroImg} alt="hero-image" className='w-[500px]' />
        </div>
      </section>

      <section>
        <div>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className='border border-[#E2E2E1] rounded-[4px] text-[#021720] font-normal text-sm leading-3 px-4 py-2.5 mb-4 w-fit block'
          >
            <option value="all">All topics</option>
            <option value="business">Business</option>
            <option value="politics">Politics</option>
            <option value="sports">Sports</option>
            <option value="tech">Tech</option>
            <option value="health">Health</option>
          </select>
        </div>

        <div className='flex items-center justify-center'>
          {loading ? (
            <Loading />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 mt-10'>
              {news.map((article) => (
                <NewsCard key={article.url} article={article} />
              ))}
            </div>
          )}
          {error && <div className="text-red-500 text-center mt-10">{error}</div>}
        </div>
      </section>
    </>
  );
};

export default Home;