import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState('');


    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => {
                let fetchedData = response.data;
                setData(fetchedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    {/* <div className=' '>
                    {
                        skills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md  hover:scale-110 duration-500 
                            py-2 rounded-lgg ${style}` }>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }


                </div> */}


    return (
        <div className='bg-gradient-to-b from-black to-gray-700 min-w-full h-full'>


            <div className='max-w-screen-lg md:px-4 p-4 mx-auto  md:text-xl    pt-12 justify-center items-center text-white grid  grid-cols-2 
            sm:grid-cols-4 gap-6 px-6 text-center py-8 sm:px-0'>
                {
                    Array.isArray(data) && data.map((item, index) => (
                        // <p key={index}>{item.score}</p>
                        <div key={index}  >

                            <div className='  text-white' >
                                <Link to={'/' + item.show.id}  >
                                    <img src={item?.show?.image?.original || 'https://static.tvmaze.com/uploads/images/medium_portrait/477/1193524.jpg'} alt="" />
                                </Link>
                                <p className='text-xl '>{item.show.name}</p>
                                <div className='lg:flex justify-between pt-2 '>
                                    <div className='flex flex-col items-start text-md text-gray-300'>
                                        <p className='text-sm'>Type: {item.show.type}</p>
                                        <p className='text-sm'>Genres: {item.show.genres[0]}</p>
                                    </div>
                                    <div className='pt-2 flex items-start'>
                                        < Link to={'/' + item.show.id} className=' text-sm md:text-lg bg-gradient-to-r text-black from-blue-600 to-blue-200 rounded-lg px-2 py-1'>
                                            More Info
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
