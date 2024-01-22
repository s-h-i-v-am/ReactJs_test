import React from 'react'
import { IMAGE_URL } from '../../utilis/constants';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ShowCard = ({data}) => {
  
  const {id,name,genres,rating,image} = data?.show;

//   console.log(data.show)
    
  return (
    <div className='w-[48%] md:w-[23%] lg:w-[18%] p-2 bg-gray-800 rounded-lg'>
        <div className=''>
            <img className='w-full h-[295px]' src={image!=null ? image?.medium : IMAGE_URL} alt="" />
        </div>
        <div className='mt-2'>
            <h3 className='font-bold text-[16px]'>{name}</h3>
            <p className='flex gap-2 items-center'>{rating?.average || "--"} <FaStar className='text-white text-[16px]' /></p>
            <p>{genres?.join(",")}</p>
            <Link to={`/details/${id}`}>
                <button className='bg-yellow-600 px-6 py-1 mt-3 rounded-full'>View</button>
            </Link>
            
        </div>
    </div>
  )
}

export default ShowCard