import React, { useState } from 'react'

const Navbar = () => {
     const [isMenuOpen, setMenuOpen] = useState(false)
function hamburgerHandler() {
  setMenuOpen((state)=>!state);
}
  return (
  <nav className="px-16 py-5 z-10 text-lg font-semibold flex justify-between items-center bg-purple-900 navbar">
    
        <img src="/logo.webp" className="w-11 h-11 rounded-full"  alt="" />
 <div className={`absolute top-[80px] translate-y-[-1000px] transition ease-in-out delay-1000 py-7  left-0 w-full text-black bg-white  ${isMenuOpen && `translate-y-[0px]` } md:static md:bg-transparent md:w-auto md:translate-y-[0px]`}> 

      <ul className='space-y-8 px-7 cursor-pointer text-black md:space-x-8 md:flex md:space-y-0'>
        <li><a href="#" className='text-black md:text-white hover:text-gray-200'>Facilities</a></li>
        <li><a href="#" className='text-black md:text-white hover:text-gray-200'>Slots</a></li>
        <li><a href="#" className='text-black  md:text-white  hover:text-gray-200'>Facilities</a></li>
        <li><a href="#" className='text-black md:text-white hover:text-gray-200'>Login</a></li>

      </ul>
 </div>
    
  
<svg width="35px" height="35px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="iconify iconify--emojione-monotone bg-white rounded-full w-12 h-10 grid place-items-center overflow-hidden" preserveAspectRatio="xMidYMid meet"><path d="M60.222 27.687l-6.973-6.973L55 18.962v-2.5l-7.46-7.461h-2.5l-1.752 1.752l-6.974-6.975c-2.372-2.371-6.255-2.371-8.628 0l-6.974 6.974l-1.75-1.751H16.46L9 16.464v2.5l1.752 1.751l-6.972 6.972c-2.373 2.373-2.373 6.256 0 8.627l6.973 6.974L9 45.04v2.5l7.461 7.461h2.502l1.752-1.753l6.972 6.972c2.373 2.373 6.256 2.373 8.628 0l6.972-6.972l1.754 1.753h2.5L55 47.542V45.04l-1.752-1.753l6.974-6.974c2.371-2.371 2.371-6.253 0-8.626m-2.823 8.197l-5.777 5.776l-.659-.659h-2.502L41 48.464v2.5l.659.659l-5.775 5.774c-2.135 2.137-5.631 2.137-7.767 0l-5.776-5.776l.659-.659v-2.5l-7.46-7.461h-2.5l-.66.66l-5.777-5.777c-2.137-2.135-2.137-5.631 0-7.768l5.775-5.776l.662.661h2.5L23 15.542V13.04l-.661-.661l5.778-5.778c2.1full-2.135 5.632-2.135 7.767 0l5.777 5.778l-.661.661v2.5l7.461 7.461h2.502l.661-.661l5.775 5.776c2.135 2.137 2.135 5.633 0 7.768" fill="#000000"></path><path d="M35.576 26.901l-2.426-2.426a1.631 1.631 0 0 0-2.301 0l-2.427 2.427L21 21.001l5.9 7.424l-2.426 2.426a1.631 1.631 0 0 0 0 2.301l2.426 2.426l-5.9 7.421l7.422-5.9l2.428 2.428a1.631 1.631 0 0 0 2.301 0l2.427-2.427L43 43.001l-5.9-7.423l2.427-2.427a1.631 1.631 0 0 0 0-2.301L37.1 28.423l5.9-7.422l-7.424 5.9" fill="#000000"></path></svg>
   <img src="/bars.png" className='md:hidden' onClick={hamburgerHandler} alt="" />
    
     </nav>
  )
}

export default Navbar