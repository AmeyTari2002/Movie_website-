import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImCross } from "react-icons/im";


const MoviePage = () => {
    const [data, setData] = useState('');
    const [displayform, setdisplayform] = useState(false);
    console.log(displayform)

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
        <div className='h-full bg-gradient-to-b from-black to-gray-800 min-w-full '>


            <div className='max-w-screen-lg md:px-4 p-4 mx-auto  md:text-xl   justify-center items-center text-white  px-6 text-center py-8 sm:px-0'>
                {

                    displayform ? (
                        <div className='h-screen mt-20  bg-gradient-to-b from-black to-gray-800 min-w-full '>
                            <div className='flex max-w-screen-lg md:px-4 p-4 mx-auto   md:text-xl   justify-center items-center  text-white  px-8 text-center py-8 sm:px-0'>
                                {
                                    Array.isArray(data) && data.map((item, index) => (
                                        // <p key={index}>{item.score}</p>
                                        <div key={index}  >
                                            {
                                                id == item.show.id && (
                                                    <div className='flex items-center justify-center mt-5 text-white  h-full w-auto   ' >
                                                        <div className='h-auto w-auto lg:w-auto rounded-lg bg-gray-700 border-1 '>
                                                            <button className='mt-5' onClick={() => {
                                                                setdisplayform(!displayform)
                                                            }}><ImCross />
                                                            </button>
                                                            <div className='flex flex-col px-6 md:mx-12'>
                                                                <form className='mt-5 flex flex-col' >
                                                                    <div className='flex justify-center items-center'>
                                                                        <label htmlFor="names">Name:</label>
                                                                        <input type="text" name="names" id="" value={item.show.name} className='mx-2  rounded-lg mt-5 text-black' />
                                                                    </div>
                                                                    <div>
                                                                        <label  htmlFor="place">Place:</label>
                                                                        <input type="text" name="place" id="" placeholder='Mumbai' className='rounded-md mt-5 mx-2  text-black' />
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="cat">Type:</label>
                                                                        <input type="text" name="cat" id="" placeholder='comedy' className='rounded-md mt-5 mx-2  text-black' />
                                                                    </div>

                                                                    <div>
                                                                        <label htmlFor="date">Date:</label>
                                                                        <input type="date" name="date" id="" className='rounded-md mt-5 mx-2  text-black' />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className='my-7'>
                                                                < Link to={'/'} className=' text-sm md:text-lg  text-white bg-gradient-to-b from-blue-950 to-blue-500 rounded-lg px-8 py-2'>
                                                                    More Info
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            }


                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    ) : (
                        Array.isArray(data) && data.map((item, index) => (
                            // <p key={index}>{item.score}</p>
                            <div key={index}  >
                                {
                                    id == item.show.id && (
                                        <div className='  text-white  h-full ' >
                                            <div className='flex justify-center items-center' >
                                                <img className='lg:h-auto items-center justify-center ' src={item?.show?.image?.original || 'https://static.tvmaze.com/uploads/images/medium_portrait/477/1193524.jpg'} width={350} alt="" />
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
                                                <button onClick={() => {
                                                    setdisplayform(!displayform)
                                                }} className=' bg-gradient-to-b from-blue-900 to-blue-500 md:px-40 px-24 py-2'>
                                                    Book
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }


                            </div>
                        )))
                }
            </div>

        </div>
    )
}

export default MoviePage