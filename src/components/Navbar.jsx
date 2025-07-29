import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [activeTab, setActiveTab] = useState("Home");

  const menuItems = [
    { name:"Home", id:"/"},
    { name:"Menu", id:"explore-menu"},
    { name:"Contact Us", id:"app-download"},
    { name:"About", id:"footer"} 
  ];

  const {getTotalCartAmount} = useContext(StoreContext)

  return (

    <div className='navbar py-[20px] px-[0] flex justify-between items-center '>

        <Link to='/'><img className='w-[150px] lg:w-[140px] ' src={Logo} alt="" /></Link>

        <ul className='navbar-menu flex gap-[20px] text-[#49557e] text-[18px] max-lg:gap-[20px] max-lg:text-[17px] max-md:gap-[15px] max-md:text-[16px] max-md:hidden '>
          {menuItems.map((Item) => (
            <li
            key={Item.name}
            onClick={() => setActiveTab(Item.name)} 
            className={`cursor-pointer pb-2 transition-all ${activeTab === Item.name ? "border-solid border-b-2 border-[#49557e]" : "border-b-2 border-transparent"}   ` } >
              <a href={`#${Item.id}`}>
                {Item.name} 
              </a>
              </li>

          ))}
        </ul>

        {/* Navbar Right */}
        <div className='navbar-right flex items-center gap-[40px] text-[#49557e] max-lg:gap-[30px] max-md:gap-[20px] '>
            <CiSearch size={30}/>
            <div className='navbar-search-icon  relative  '>
                <Link to='/cart'><FaBasketShopping size={30} /></Link>
                <div className={getTotalCartAmount()=== 0 ?"":"absolute min-w-3 min-h-3 bg-[#ff6347] rounded-[10px] top-[-18px] right-[-8px]" }></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className='bg-transparent text-[16px] border-[1px] py-[10px] px-[30px] rounded-[50px] cursor-pointer transition duration-[0.3s] hover:bg-[#fff4f2] max-lg:py-[8px] max-lg:px-[25px] max-md:py-[7px] max-md:px-[20px] max-md:text-[15px] '>SighIn</button>
        </div>
    </div>
  )
}

export default Navbar
