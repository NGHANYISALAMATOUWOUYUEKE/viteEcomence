import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-[100px] text-[max(3vw,20px)] text-center font-[500]' id='app-download'>
        <p>For Better Experience Download <br />SpeedFood App</p>
        <div className="app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-[40px]">
            <img className='w-[max(30vw,120px)] max-w-[180px] transition-[0.5s] cursor-pointe hover:scale-[1.05]  ' src={assets.play_store} alt="" />
            <img className='w-[max(30vw,120px)] max-w-[180px] transition-[0.5s] cursor-pointer hover:scale-[1.05] ' src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
