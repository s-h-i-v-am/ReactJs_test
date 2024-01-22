import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ShowCard from '../components/HomeComponents/ShowCard';

const Home = () => {
  
  const [ShowsList, setShowsList] = useState([]);

  useEffect(()=>{

    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then((response)=> response.json())
    .then((data)=> {
        // console.log(data)
        setShowsList(data);
        // console.log(ShowsList)
    });

  },[])
    
  return (
    <div className='p-4 text-white flex justify-between flex-wrap gap-6'>
        {
            ShowsList.map((showdetails)=>(
                <ShowCard key={showdetails.show.id} data={showdetails} />
            ))
        }
    </div>
  )
}

export default Home