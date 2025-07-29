import React from 'react'

const Header = () => {
  return (
    <div className="header h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative rounded-md max-lg:h-[38vw] ">
      <div className="Header-content max-md:max-w-[65%]  animate-[fadeIn_3s] absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] max-lg:max-w-[45%]  ">
        <h2 className='font-[500] text-white text-[max(4.5vw,22px)] '>Order your favourite food</h2>
        <p className='text-white text-[1vw] max-md:hidden '>Choose from the diverse menu featuring a delactatable array of dishes crafted with finest ingredientis and culinary expertise . Our mission to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='max-md:py-[2vw] max-md:px-[4vw] border-none text-[#747474] bg-white font-[500] py-[1vw] px-[2.4vw] text-[max(1vw,13px)] rounded-[50px]  '>View menu</button>
      </div>
    </div>
  )
}

export default Header
