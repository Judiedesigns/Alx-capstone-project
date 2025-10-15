// import blogImg1 from '../assets/blog-img-1.png';
import { useNavigate } from "react-router-dom";

const NewsCard = ({article}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${article.uuid}`);
    };

    const formattedDate = new Date(article.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const maxTitleLength = 80;
    const trimmedTitle =
        article.title.length > maxTitleLength
        ? `${article.title.slice(0, maxTitleLength)}...`
        : article.title;

    const maxDescriptionLength = 120;
    const trimmedDescription =
        article.description.length > maxDescriptionLength
        ? `${article.description.slice(0, maxDescriptionLength)}...`
        : article.description;

    return (
        <div className="hover:scale-102 transition-transform duration-800" onClick={handleClick} style={{cursor: 'pointer'}}>
            <img src={article.image_url} alt={article.title} className='h-80 w-full object-cover rounded-sm' loading="lazy"/>
            <div className="h-16">
                <p className='text-[#021720] text-lg text-bold font-normal leading-6 mt-6 text-left'>
                    {trimmedTitle}
                </p>
            </div>

            <p className="text-[#021720] opacity-50 my-2">{trimmedDescription}</p>

            <div className='flex items-center gap-4 my-5 pb-6 border-b border-[#e2e2e1]'>
                <div className='bg-[#F3F4F2] rounded-[4px] px-2 py-1.5'>
                    <p className="text-[#021720] opacity-80 font-normal text-sm leading-3">Articles</p>
                </div>
                <p className='text-[#021720] text-sm font-normal leading-4 opacity-60'>{formattedDate}</p>
            </div>
        </div>
    );
};

export default NewsCard;