import heroImg from '../assets/heroImg.png';
import NewsCard from '../components/NewsCard';
import data from '../data.json';

const Home = () => {
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 mt-20'>
          {data.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>  
      </section>
    </>
  );
};

export default Home;