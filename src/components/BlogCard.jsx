// import blogImg1 from '../assets/blog-img-1.png';
import { useNavigate } from "react-router-dom";

const BlogCard = ({article}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${article.id}`);
    };

    return (
        <div className="hover:scale-102 transition-transform duration-800" onClick={handleClick} style={{cursor: 'pointer'}}>
            <img src={article.image} alt={article.title} className='h-auto w-full rounded-sm'/>
            <p className='text-[#021720] text-lg font-normal leading-6 mt-6 text-left'>
                {article.title}
            </p>
            <div className='flex items-center gap-4 my-5 pb-6 border-b border-[#e2e2e1]'>
                <div className='bg-[#F3F4F2] rounded-[4px] px-2 py-1.5'>
                    <p className="text-[#021720] opacity-80 font-normal text-sm leading-3">Articles</p>
                </div>
                <p className='text-[#021720] text-sm font-normal leading-4 opacity-60'>{article.date}</p>
            </div>
        </div>
    )
};

export default BlogCard;