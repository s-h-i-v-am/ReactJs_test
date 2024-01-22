import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Summary from '../components/DetailsComponents/Summary';


const Details = () => {
  
  const [ShowDetails, setShowDetails] = useState(null);
  const {showid} = useParams();
  
  useEffect(()=>{

     fetch(`https://api.tvmaze.com/shows/${showid}`)
    .then((response)=> response.json())
    .then((data)=> {
        setShowDetails(data);
    })

  },[])
    
  return (
    <div className='p-4 text-white'>
        {ShowDetails ? <Summary data={ShowDetails}/> : <h1>Loading...</h1>}
    </div>
  )
}

export default Details