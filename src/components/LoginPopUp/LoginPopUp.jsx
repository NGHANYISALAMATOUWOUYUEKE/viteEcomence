import React, {useState} from 'react'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup absolute z-[1] w-full h-full bg-[#00000090] grid '>
      <form action="" className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[14px] text-[14px] animate-[fadeIn_0.5s] ">
        <div className="login-popup-title flex justify-between items-center text-black ">
            <h2>{currState} </h2>
            <img className='w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input flex flex-col gap-[20px] ">
            {currState==="Login" ? <></> : <input className=' outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] ' type="text" placeholder='Your name'required />}
            
            <input className=' outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] ' type="email" placeholder='Your email'required />
            <input className=' outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] ' type="password" placeholder='Your password'required />
        </div>
        <button className='border-none p-[10px] rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer  ' >{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px] ">
            <input className='mt-[5px]' type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" 
        ? <p>Create a new account ? <span className='text-[tomato] font-[500] cursor-pointer ' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        : <p>Already have and acount ? <span className='text-[tomato] font-[500] cursor-pointer ' onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
