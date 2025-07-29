import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order flex items-start justify-between gap-[50px] m-[100px]' action="">
      <div className="place-order-left w-full max-w-[max(30%,500px)] ">
        <p className='title text-[30px] font-[600] mb-[50px] '>Delivery Information</p>
        <div className="multi-field flex gap-[10px] ">
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='First name' />
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Last name' />
        </div>
        <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="email" placeholder='Email Address' />
        <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Street' />
        <div className="multi-field flex gap-[10px] ">
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='City' />
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='State' />
        </div>
        <div className="multi-field flex gap-[10px] ">
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Zip code' />
          <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Country' />
        </div>
        <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)] ">
        <div className="cart-total flex-1 flex flex-col gap-[20px] ">
          <h2 className='text-[30px] font-[600]'>Cart total</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555] ">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}$</p>
            </div>
            <hr className='my-[20px] mx-0' />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{2}$</p>
            </div>
            <hr className='my-[20px] mx-0' />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Total</p>
              <p>{getTotalCartAmount()+2}$</p>
            </div>
          </div>
          <button className='border-none text-white bg-[tomato] w-[max(15vw,200px) py-[12px] px-0 mt-[20px] rounded-[4px] cursor-pointer] '>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
