import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const MoviePage = () => {
    const [data, setData] = useState('');

    const { id } = useParams()

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => {
                let fetchedData = response.data;
                setData(fetchedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <div className='h-full bg-gradient-to-b from-black to-gray-700 min-w-full '>


            <div className='max-w-screen-lg md:px-4 p-4 mx-auto  md:text-xl   justify-center items-center text-white  px-6 text-center py-8 sm:px-0'>
                {
                    Array.isArray(data) && data.map((item, index) => (
                        // <p key={index}>{item.score}</p>
                        <div key={index}  >
                            {
                                id == item.show.id && (
                                    <div className='  text-white  h-full ' >
                                        <div className='flex justify-center items-center' >
                                            <img className='lg:h-auto items-center justify-center ' src={item?.show?.image?.original || 'https://static.tvmaze.com/uploads/images/medium_portrait/477/1193524.jpg'} width={350}  alt="" />
                                        </div>
                                        <div className='flex flex-col '>
                                            <p className='text-6xl lg:text-8xl '>{item.show.name}</p>
                                            <p className='text-3xl lg:text-5xl text-gray-300 '>Type: {item.show.type}</p>
                                            <p className='text-2xl lg:text-4xl text-gray-400'>Genres: {item.show.genres[0]}</p>
                                            <p className='text-2xl lg:text-4xl text-gray-400'>Runtime: {item.show.schedule.time}      Day: {item.show.schedule.days}</p>
                                            <p className='text-2xl  text-gray-400'>Ratings:
                                                <span className='text-yellow-200 px-2'>
                                                    {item.show.rating.average}
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <p className='text-justify  text-gray-400'>{item.show.summary}</p>
                                        </div>
                                        <div className='mt-8'>
                                            <Link to={'/'} className=' bg-gradient-to-b from-blue-900 to-blue-500 px-40 py-2'>
                                                Book
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }


                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MoviePage