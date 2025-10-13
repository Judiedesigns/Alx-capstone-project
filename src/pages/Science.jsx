import NewsCard from '../components/NewsCard';
import data from '../data.json';

function Science() {
    return (
        <div>
            <div className="space-y-6 lg:pt-24 pt-12 max-w-xl">
                <h2 className="text-[#0C0C0C] md:text-5xl text-4xl">Science News</h2>
                <p className="text-[#0c0c0c] sm:text-base text-sm">Stay informed with real-time updates on news across Nigeria, and the world. Find up to date and reliable news </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 mt-20'>
                {data.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>  
        </div>
    );
}

export default Science;