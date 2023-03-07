import React from 'react'
import './card.css'
function Card({imgUrl, text1, text2, text3}){
    return(<div>
        <div className='good'>
            <img  data-aos="flip-up" data-aos-duration="3000" src={imgUrl} alt="" />
            <h1  data-aos="zoom-up" data-aos-duration="3000" className='text-[30px] leading-[48px] font-[600] pt-[20px]  text-[black] dark:text-[white]'>{text1}</h1>
            <p  data-aos="fade-up" data-aos-duration="3000" className='w-[372px] font-[400] text-[20px] leading-[30px] text-[#8F95A5] pt-[20px] pb-[20px] dark:text-[white]' >{text2}</p>
            <button  data-aos="flip-down" data-aos-duration="3000" className='bg-[#EEEEEE] rounded-[5px] w-[240px] h-[40px] font-[400] text-[18px] leading-[45px] text-[#263238] '>{text3}</button>
        </div>
    </div>)
}
export {Card}