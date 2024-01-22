import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Summary = ({data}) => {
  
//   console.log(data);  
  const [ShowForm, setShowForm] = useState(false);
  const [Bookings, setBookings] = useState([]);
  const [FormData, setFormData] = useState({
    name:"",
    tickets:0,
    time:"4:00 PM"
  })
  const {image,name,rating,genres,summary,url} = data;
  
  function handleSubmit(e)
  {
    e.preventDefault();
    const {name,tickets} = FormData;

    if(name === "" || tickets === 0)
    {
        return alert("Please Fill the Fields Properly")
    }
    setBookings([...Bookings,FormData])
    
    // console.log(Bookings);
    localStorage.setItem('bookTickets',JSON.stringify(Bookings));
    setFormData({...FormData,name:"",tickets:0,time:"4:00 PM"});
    alert("Tickets Booked")
  }
  return (
    <div >

        <div className='w-full flex flex-col md:flex-row gap-6 '>
            <div className='w-full md:w-[20%] '>
                <img src={image?.original} alt="" />            
            </div>

            <div className='w-full md:w-[70%]'>
                <h1 className='font-bold text-3xl'>{name}</h1>
                <p>{genres?.join(",")}</p>
                <p className='text-yellow-500'>{rating?.average || "---"}</p>
                <p className='my-4 text-gray-300 italic text-[14px] font-normal md:text-[18px]'>{summary}</p>
                <button onClick={()=> setShowForm(true)} className='bg-yellow-500 hover:bg-yellow-600 px-4 py-3 rounded-md'>Book Ticket</button>
            </div>
        </div>

        {ShowForm && <div className='absolute flex items-center justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-sm p-2 top-0 left-0 w-full min-h-screen'>

              <form onSubmit={handleSubmit} className='bg-white text-black w-[90%] md:w-[50%] p-4 rounded-lg'>

                   <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-2xl'><span className='font-normal'>Movie: </span>{name}</h1>
                        <RxCross2 className='font-bold text-2xl cursor-pointer' onClick={()=> setShowForm(false)}/>
                   </div>

                   <div className='mt-4 flex flex-col gap-6'>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name">Enter Your Name</label>
                            <input
                            value={FormData.name}
                            onChange={(e)=> setFormData({...FormData,name:e.target.value})} 
                            id='name' 
                            type="text" 
                            className='border border-black outline-none px-3 py-2 rounded-md' /> 
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="ticket">Number Of Tickets</label>
                            <input
                             value={FormData.tickets}
                             onChange={(e)=> setFormData({...FormData,tickets:Number(e.target.value)})}
                             id='ticket' 
                             type="number" 
                             className='border border-black outline-none px-3 py-2 rounded-md' /> 
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="time">Select Show Time</label>
                            <select 
                            value={FormData.time}
                            onChange={(e)=> setFormData({...FormData,time:e.target.value})}
                            className='border border-black outline-none px-3 py-2 rounded-md' 
                            name="time" 
                            id="time"
                            >
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                                <option value="7:30 PM">7:30 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                                <option value="11:30 PM">11:30 PM</option>
                            </select>
                        </div>

                        <div className='mx-auto mt-4'>
                            <button className='bg-yellow-500 text-white font-bold px-4 py-2 rounded-md'>Book</button>
                        </div>

                   </div> 
              </form>  

        </div>
        }
    </div>
  )
}

export default Summary