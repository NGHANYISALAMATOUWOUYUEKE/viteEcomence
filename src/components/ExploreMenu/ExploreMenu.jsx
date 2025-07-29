import React from 'react'
import{menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap=[20px] ' id='explore-menu'>

      <h1 className='text-[#262626 font-[500]'>Explore our menu</h1>
      <p className='explore-menu-text max-lg:max-w-full max-lg:text-[14px] max-w-[60%] text-[#262626]'>
        Choose from a diverse menu featuring a delectable array of diches. 
        Our mission is to satisfy your craving and elevate your dining experience, 
        one delicious meal at a time.
      </p>
      <div className="explore-menu-list custom-scrollbar flex justify-between items-center text-center my-[20px] mx-0 overflow-scroll">
        
        {menu_list.map((item, index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={`w-[7.5vw] min-w-[80px] cursor-pointer round-[50%] transition-[0.2s] ${category === item.menu_name ? 'border-[4px] border-solid border-[tomato] p-[2px] rounded-[50%]' : ''}`} src={item.menu_image} alt="" />
              <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer '>{item.menu_name} </p>
            </div>
          )
        })}
      </div>
      <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none ' />
      
    </div>
  )
}

export default ExploreMenu
