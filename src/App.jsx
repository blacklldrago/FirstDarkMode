import brit from './img/Britlex.png';
import woman from './img/woman.png';
import bro from './img/bro.png';
import type1 from './img/type1.png';
import book from './img/book.png';
import podcast from './img/podcast.png';
import busi from './img/busi.png';
import boy from './img/boy.png';
import woman1 from './img/woman1.png';
import videochat from './img/videochat.png';
import group from './img/group.png';
import { Card } from './component/card';
import './App.css'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Switcher from './Switcher';

import 'animate.css';
function App ()  {

  useEffect(() => {
    AOS.init();
  }, [])
  const [ lng, setLng ] = useState('en')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }
  return(<div>
    <div className='container1 pb-[100px] bg-[white] dark:bg-[black]'> 
      <div className='container'>
        <div className='navbar flex justify-evenly pt-[30px] text-[20px] font-medium gap-[100px]'>
          <div> 
            <img  className='animate__animated animate__bounce' src={brit} alt="" />
          </div>
          <div className='middle'>
            <ul className='flex justify-evenly gap-[20px]'> 
              <li className='animate__animated animate__bounce  text-[black] dark:text-[white]'>{t("text1")}</li>
              <li className='animate__animated animate__bounce text-[black] dark:text-[white]'>{t("text2")}</li>
              <li className='animate__animated animate__bounce text-[black] dark:text-[white]'>{t("text3")}</li>
              <li className='animate__animated animate__bounce text-[black] dark:text-[white]'>{t("text4")}</li>
              <li className='animate__animated animate__bounce text-[black] dark:text-[white]'>{t("text5")}</li>
            </ul>
          </div>
          <div  className='flex gap-[20px] animate__animated animate__bounce'>
            <div>
            <button className='border-solid border to-black h-[45px] w-[150px] text-[black] dark:text-[white]'>{t("text6")}</button>
            </div>
            <div>
            <select value={lng} onChange={handleChange} className='bg-[white] dark:bg-[black] text-[black] dark:text-[white] pt-[10px] pl-[10px]'>
            <option value = {"en"}>En</option>
              <option value = {"ru"}>Ru</option>
              <option value = {"tj"}>Tjk</option> 
            </select>
            <Switcher/>
            </div>
          </div>
        </div>
        <div className='center flex justify-center items-center pt-[100px]' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <div>
            <h1 className='font-semibold text-[64px] leading-[80px] w-[386px] text-[black] dark:text-[white]' >{t("text7")}</h1>
            <p className='font-normal text-[24px] leading-[36px] w-[632px] text-[#8F95A5] pt-[20px] pb-[20px]'>{t("text8")}</p>
            <button className='h-[118px] w-[388px] border-none bg-[#263238] text-[white] font-normal text-[36px] leading-[54px] rounded-[15px]'>{t("text9")}</button>
          </div>
          <div><img src={woman} alt="" /></div>
        </div>
      </div>
    </div>
    <div className='container2 pb-[200px] bg-[white] dark:bg-[black]'>
      <div className='container'>
        <h1 className='text-[black] text-center leading-[80px] font-semibold text-[48px] pb-[5x0px]'>{t("text2")}</h1>
        <div className='like flex justify-center gap-[30px] pt-[100px] max-[640px]:flex-wrap' data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="2000">
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" className='for1 bg-[#F5F5F5] dark:bg-[black] rounded-[10px] w-[435px]'>      
            <img src={bro} alt="" />
            <h1 className='font-semibold leading-[80px] text-[30px] pl-[30px]'>{t("text10")}</h1>
            <p className='text-[#8F95A5]  dark:text-[white] text-[16px] w-[347px] font-normal leading-[24px] mb-[20px] pl-[30px]'>{t("text11")}<br /> <br />{t("text12")}</p>
            <button className='bg-[#263238] rounded-[5px] border-none h-[60px] w-[230px] font-medium text-[18px] leading-[27px] text-[white] ml-[30px]'>{t("text13")}</button>
          </div>
          <div>
            <div className='like1 flex gap-3 mb-[30px]  dark:bg-[black]'  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000" >
              <div className=' bg-[#F5F5F5]  dark:bg-[black] rounded-[10px] w-[435px] pb-[50px]'>
            <img className='pl-[130px]' src={type1} alt="" />
            <h1 className='font-semibold leading-[80px] text-[30px] pl-[50px]'>{t("text14")}</h1>
            <p className='text-[#8F95A5]  dark:text-[white] text-[16px] w-[347px] font-normal leading-[24px] mb-[20px] pl-[50px]'>{t("text15")}</p>
            <button className='bg-[#263238] rounded-[5px] border-none h-[60px] w-[230px] font-medium text-[18px] leading-[27px] text-[white] ml-[50px]'>{t("text16")}</button>
              </div>
              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="3000"  className=' dark:bg-[black] bg-[#F5F5F5] rounded-[10px] w-[435px] pb-[50px]'>
              <img className='pt-[30px]' src={book} alt="" />
            <h1 className='font-semibold leading-[80px] text-[30px] pl-[30px]'>{t("text17")}</h1>
            <p className='text-[#8F95A5]   dark:text-[white] text-[16px] w-[347px] font-normal leading-[24px] mb-[20px] pl-[30px]'>{t("text18")}</p>
            <button className='ml-[30px] bg-[#263238] rounded-[5px] border-none h-[60px] w-[230px] font-medium text-[18px] leading-[27px] text-[white]'>{t("text16")}</button>
              </div>
            </div>
            <div data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="3000"  className='  dark:bg-[black] like2 flex bg-[#F5F5F5] rounded-[10px] w-[885px] justify-evenly pb-[30px]'>
              <div>
                <h1 className='font-semibold leading-[80px] text-[30px]'>{t("text19")}</h1>
                <p className='text-[#8F95A5]  dark:text-[white] text-[16px] w-[347px] font-normal leading-[24px] mb-[20px]'>{t("text20")}</p>
                <button className='bg-[#263238] rounded-[5px] border-none h-[60px] w-[230px] font-medium text-[18px] leading-[27px] text-[white]'>{t("text16")}</button> 
              </div>
              <div>
                <img src={podcast} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container3 pb-[200px] pt-[100px]  bg-[white] dark:bg-[black]'>
      <div className='container'>
        <div className='flex justify-evenly flex-wrap'>
          <div>
            <h1 data-aos="fade-left" data-aos-duration="3000" className='font-semibold text-[48px] leading-[80px] text-[black]'>{t("text21")}</h1>
            <p  data-aos="fade-left" data-aos-duration="3000" className='w-[635px] text-[20px] leading-[30px] font-normal text-[#8F95A5] pt-[20px] pb-[50px]'>{t("text22")}</p>
            <div className='flex-wrap flex justify-evenly' >
              <div data-aos="flip-down" data-aos-duration="3000" className=' text-center'>
                <h1 className='text-[48px] leading-[80px] font-[600] text-[black] dark:text-[white]'>800</h1>
                <p className='text-[black] dark:text-[white]'>{t("text23")}</p>
              </div>
              <div data-aos="flip-up" data-aos-duration="3000" className=' text-center '>  
              <h1 className='text-[48px] leading-[80px] font-[600] text-[black] dark:text-[white]' >18</h1>
              <p className='text-[black] dark:text-[white]'>{t("text24")}</p>
              </div>
              <div data-aos="fade-down" data-aos-duration="3000" className=' text-center'>  
              <h1 className='text-[48px] leading-[80px] font-[600] text-[black] dark:text-[white]'>6</h1>
              <p className='text-[black] dark:text-[white]'>{t("text25")}</p>
              </div>
            </div>
          </div>
          <div>
            <img data-aos="fade-down" data-aos-duration="3000" src={busi} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='container4 pb-[200px] bg-[white] dark:bg-[black]'>
      <div className='container'>
        <h1 className='text-center font-[600] text-[48px] leading-[80px] text-[black] dark:text-[white] pb-[70px]'>{t("text26")}</h1>
        <div className='photo flex-wrap flex justify-evenly gap-[100px]'>
          <Card imgUrl={woman1}
          text1 = {t("text27")}
          text2 = {t("text28")}
          text3 = {t("text29")}
          />
          <Card imgUrl={group}
          text1 = {t("text30")}
          text2 = {t("text31")}
          text3 = {t("text32")}
          />
          <Card imgUrl={videochat}
          text1 = {t("text33")}
          text2=  {t("text34")}
          text3 = {t("text35")}
          />
        </div>
      </div>
    </div>
    <div className='container5 pb-[200px]  bg-[white] dark:bg-[black] '  >
      <div className='container'>
        <div className='flex-wrap flex justify-evenly'>
          
        <div data-aos="zoom-in" data-aos-duration="3000">
          <img src={boy} alt="" />
        </div>
        <div>
          <h1 data-aos="fade-down" data-aos-duration="3000" className='font-[600] text-[48px] leading-[80px] '>{t("text36")}</h1>
          <p data-aos="zoom-out" data-aos-duration="3000" className='text-[#8F95A5] dark:text-[white] font-[400] text-[20px] leading-[30px] w-[776px] pt-[20px] pb-[20px]'>{t("text37")}</p>
          <input data-aos="flip-down" data-aos-duration="3000" className='shap bg-[black] text-[white] w-[450px] h-[65px] pl-[20px] mr-[20px]' placeholder={t("text38")} />
          <button data-aos="zoom-out" data-aos-duration="3000" className=' w-[284px] h-[70px]  dark:text-[white] bg-[#263238] rounded-[10px] text-[white] font-[500] text-[20px] leading-[30px]'>{t("text39")}</button>
       </div>
        
        </div>
      </div>
    </div>
    <div className='container6 pb-[30px]  bg-[white] dark:bg-[black]'>
      <div className='container'>
        <div className='flex-wrap flex justify-around  gap-[100px]'>
          <div>
            <img src={brit} alt="" />
          </div>
          <div>
            <p className='text-[#8F95A5]  dark:text-[white] text-[24px] leading-[36px] font-[400]'>{t("text40")}</p>
          </div>
        </div>
      </div>
    </div>
  </div>)
};
export default App