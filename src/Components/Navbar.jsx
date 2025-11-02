import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className='flex justify-between bg-violet-700 text-white p-2'>
      <div className='logo'>
        <div className='mx-8'>
          <span className='font-bold text-red-700'>my</span><span className='font-extrabold text-xl'>Task</span>
        </div>
      </div>
      <ul className='flex gap-5 mx-9'>
        <Link to="/" className='hover:text-yellow-500 transition-all duration-150 hover:font-bold'>Home</Link>
        <Link to="/task" className='hover:text-yellow-500 transition-all duration-150 hover:font-bold'>Add Task</Link>
      </ul>
    </nav>
  )
}

export default Navbar