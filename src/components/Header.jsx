import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-yellow-500 p-4 text-white'>
      <Link to="/"><h2 className='font-bold text-xl'>Moviess</h2></Link>
    </div>
  )
}

export default Header