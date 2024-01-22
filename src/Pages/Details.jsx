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
        // console.log(data);
        setShowDetails(data);
    })

  },[])
    
  return (
    <div className='p-4 text-white'>
        {ShowDetails && <Summary data={ShowDetails}/>}
    </div>
  )
}

export default Details