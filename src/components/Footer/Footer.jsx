import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] pt-[80px] px-[8vw] pb-[20px] mt-[100px]' id='footer'>
      <div className="footer-content max-md:flex max-md:flex-col max-md:gap-[35px] w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px] ">
        <div className="footer-content-left flex flex-col justify-center  items-start gap-1 ">
          <img className='w-[150px]' src={assets.logo}alt="" />
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet ut pariatur quia voluptatibus omnis provident soluta, ipsam delectus accusantium aspernatur deserunt atque aperiam laborum possimus explicabo eos? Quis, unde!</p>
          <div className="footer-social-icons flex flex-row">
            <img className='w-[40px] mr-[15px]' src={assets.facebook_icon} alt="" />
            <img className='w-[40px] mr-[15px]' src={assets.twitter_icon} alt="" />
            <img className='w-[40px] mr-[15px]' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-[20px] ">
          <h2 className='text-white text-2xl'>COMPANY</h2>
          <ul>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Delivery</li>
            <li className='cursor-pointer'>Privacy Policy</li>
          </ul> 
        </div>
        <div className="footer-content-right max-md:text-center flex flex-col items-start gap-[20px] ">
          <h2 className='text-white text-2xl'>Get in touch</h2>
          <ul>
            <li className='cursor-pointer'>+1-212-456-7890</li>
            <li className='cursor-pointer'>speedfood@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] my-[20px] bg-gray-600' />
      <p className="footer-copyright">Copyright 2024 <span>&copy;</span>  speedfood.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
