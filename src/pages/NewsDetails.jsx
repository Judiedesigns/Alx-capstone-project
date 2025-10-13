import details from '../assets/detailsPhoto.png';
import details2 from '../assets/blog-details-2.png';
import NewsCard from '../components/NewsCard';
import data from '../data.json';

const BlogDetails = () => {
    return (
        <>
            <section className='max-w-4xl mx-auto'>
                <p className="text-[#2C2F24] font-semibold md:text-4xl text-3xl max-w-4xl mx-auto sm:mt-16 mt-10 text-center">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>

                <div className='flex justify-between items-center gap-6 mt-12'>
                    <h3 className='font-semibold sm:text-lg text-base leading-6'>Author: John Doe</h3>
                    <p className='text-[#414536] sm:text-base text-sm leading-6'> November 12, 2024</p>
                </div>

                <div>
                    <img src={details} alt="detailsPhoto" className='max-w-5xl w-full h-auto mx-auto md:mb-16 mb-10 mt-6' />
                </div>

                <div className='w-full'>
                    <h3 className='text-left font-bold sm:text-lg text-base mb-5'>What do you need to prepare a home-made burger?</h3>

                    <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                        Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
                    </p>

                    <p className='text-left mt-6'>
                        <ol className='space-y-3'>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Quality Beef:</span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                                </p>
                            </li>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Seasoning:</span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
                                    Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                                </p>
                            </li>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
                                </p>
                            </li>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
                                </p>
                            </li>
                        </ol>
                    </p>
                </div>

                <div className='w-full md:mt-12 mt-6'>
                    <h3 className='text-left font-bold sm:text-lg text-base mb-5'>What are the right ingredients to make it delicious?</h3>

                    <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                        Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
                    </p>

                    <p className='text-left mt-6'>
                        <ol className='space-y-3'>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Quality Beef:</span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                                </p>
                            </li>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Seasoning:</span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
                                    Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                                </p>
                            </li>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
                                </p>
                            </li>
                            <li>
                                <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                                    <span className='font-bold'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
                                </p>
                            </li>
                        </ol>
                    </p>
                </div>

                <div>
                    <img src={details2} alt="detailsPhoto" className='w-full h-auto md:my-16 my-10' />
                </div>

                <div className='w-full md:mt-12 mt-6 pb-12'>
                    <h3 className='text-left font-bold sm:text-lg text-base mb-5'>What are the right ingredients to make it delicious?</h3>

                    <p className='text-left text-[#414536] sm:text-base text-sm leading-6'>
                        Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..
                    </p>
                </div>
            </section>
            <section className='md:pt-20 pt-10 pb-6 md:space-y-16 space-y-8'>
                <div className='max-w-2xl mx-auto text-center space-y-6'>
                    <h2 className='text-[#2C2F24] capitalize md:text-5xl text-3xl font-medium'>read more articles</h2>
                    <p className='text-[#414536] leading-5'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {[...data]
                        .slice(0, 3)
                        .map(article => (
                            <NewsCard key={article.id} article={article} />
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default BlogDetails;