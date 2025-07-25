import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Screenshot 2025-02-24 231341.png'
import { BsCartCheck } from "react-icons/bs";
import { useAppContext } from '../context/AppContext';
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import toast from 'react-hot-toast';


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const {user,setUser,setShowUserLogin,navigate,searchQuery,setSearchQuery,getCartCount,axios} = useAppContext();

    const logout = async ()=>{
        try {
            const { data } = await axios.get('/api/user/logout')
             if (data.success) {
                toast.success(data.message)
                 setUser(null);
                navigate('/')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
                toast.error(error.message)         
        }
    }

    useEffect(()=>{
        if(searchQuery.length > 0){
            navigate("/products")
        }
    },[searchQuery])

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

    <NavLink to='/' onClick={()=> setOpen(false)}>
        <img className="h-9" src={logo} alt="dummyLogoColored" />
    </NavLink>

    {/* Desktop Menu */}
    <div className="hidden sm:flex items-center gap-8">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>All Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>


        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input onChange={(e)=> setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
            <IoMdSearch className='w-10' />

        </div>

        <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
           <BsCartCheck className='w-5 h-5'/>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>

        {!user ? (<button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
            Login
        </button>):
        (
            <div className='relative group'>
                <MdOutlineAccountCircle className='w-10 h-10 cursor-pointer'/>
                <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                    <li onClick={()=> navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                    <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                </ul>
            </div>
        )}
    </div>

      <div className='flex items-center gap-6 sm:hidden'>
         <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
           <BsCartCheck className='w-5 h-5'/>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>
         <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="">
        {/* Menu Icon SVG */}
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
    </button>
      </div>

   
    

    {/* Mobile Menu */}
    {open && (
    <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
    <NavLink to='/' onClick={()=> setOpen(false)}>Home</NavLink>
        <NavLink to='/products'>All Products</NavLink>
        {user && 
        <NavLink to='/products'>My Orders</NavLink>
        }
         <NavLink to='/'>Contact</NavLink>
        {!user?
        ( <button onClick={()=>{
            setOpen(false);
            setShowUserLogin(true);
        }}className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
            Login
        </button>):
        (<button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
            Logout
        </button>)}
       
    </div>)}

</nav>
  )
}

export default Navbar