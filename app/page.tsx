'use client'
import BarImage from './assets/Bar.png';
import LogoImage from './assets/arena_logo.png';
import war_right from './assets/warrior-right.png';
import war_left from './assets/warrior-left.png';
import header_btn from './assets/button.png';
import appstore from './assets/appstore.png';
import playstore from './assets/playstore.png';
import left_war_res from './assets/left_war_res.png'
import redit_lofo from './assets/reddit.png'
import telegram_logo from './assets/telegram.png'
import twitter_logo from './assets/logo-twitter.png'
import mlogo_logo from './assets/masg-logo.png'
import right_war_res from './assets/right_war_res.png'
import close from './assets/x.png'
import home_bg from './assets/home_bg.png'
import nav_bg from './assets/nav_bgs.png'
import nav_bottom_war from './assets/nav_bottom_war.png'
import nav_left_war from './assets/nav_left_war.png'
import nav_right_war from './assets/nav_right_war.png'

import './index.scss';
import useWindowResize from './hooks/useWindowResize';
import { useState } from 'react';


export default function Home() {

  const navlist = ['Home', 'About Us', 'Design concept', 'Roadmap', 'Tokenomics', 'Our team', 'Partners', 'Whitepaper', 'Arena Master Deck']

  const [navtoggle, settoggle] = useState(false)


  const {height, width} = useWindowResize()

  return (
    <main className="w-full h-fit"> 
    <div className='w-full h-fit'>
      {navtoggle && (
        <div className='absolute left-0 top-0 w-full h-[755px] pt-20 bg-[#0C1821] z-40 justify-center items-center flex'>      
          <img className='absolute left-0' src={nav_left_war.src} alt="" />
          <img className='absolute right-0 top-[60px]' src={nav_right_war.src} alt="" />
          <img className='absolute w-full h-full top-0 left-0' src={nav_bg.src} alt="" />
          <img onClick={() => settoggle(false)} className='absolute top-7 right-7 cursor-pointer' src={close.src} alt="" />
          <ul className='flex flex-col gap-7 text-center z-40'>
          {navlist.map((li) => (
            <li className={`font-bold text-[18px] cursor-pointer ${li == "Home" ? 'text-[#C45260]' : "text-white"} hover:text-[#C45260] transition-colors`}>{li}</li>
            ))}
          <img className='' src={nav_bottom_war.src} alt="" />

          </ul>
        </div>
      )}

      <nav className='w-full h-14  flex px-4 justify-between items-center lg:h-24 lg:px-11 xl:px-20'>
          <img onClick={() => settoggle(true)} className='w-10 h-10 lg:hidden' src={BarImage.src} alt="" />
          <img className='w-12 h-12 xl:h-[70px] xl:w-[70px]' src={LogoImage.src} alt="" />
          <ul className='lg:flex gap-[2.5vw] xl:gap-9 hidden'>
          {navlist.map((li) => (
            <li className={`font-semibold text-[13px] xl:text-[16px] cursor-pointer ${li == "Home" ? 'text-[#C45260]' : ""} hover:text-[#C45260] transition-colors`}>{li}</li>
            ))}
          </ul>
          <div className='w-12 h-[24px] bg-black rounded-xl'></div>
      </nav>
      <div className='min-h-[700px] pb-2 bg-[#04131B] w-full px-4 flex font-black pt-14 flex-col relative md:text-center md:items-center'>
        <img className='absolute w-full h-full top-0 left-0 md:hidden' src={home_bg.src} alt="" />
        {Number(width) > 980 ? <img id='left_war' className='absolute right-0 top-0 sm:top-[-20px] z-10 lg:top-[10%] lg:w-[250px] lg:h-[450px]' src={right_war_res.src}/> : <img className='absolute right-0 top-0 sm:top-[-20px] z-10 lg:top-[10%] lg:w-[500px] lg:h-[600px]' src={war_right.src}/>}
        <h1 className='text-white h-fit text-[40px] w-[60%] leading-[50px] sm:w-[90%] sm:text-center md:w-[80%] lg:leading-[100px] lg:text-[60px] lg:w-[690px] '>ARENA AWAITS YOU, <h1 className='text-[#C45260]'>MY LORD</h1></h1>
        <div className="w-full h-[50vh] pt-9 lg:pt-3 flex flex-col items-center gap-14 relative lg:gap-8">
          <p className='leading-[24px] text-[15px] text-[#ffffffae] font-extralight pr-4 sm:w-[75%] sm:text-center sm:pt-7 md:w-[60%] lg:w-[40%] '>
            Most extreme place 
            you’ve experienced in your life, many characters, 
            amazing battlefield and your gameplay is what ittakes to be the best!
          </p>
          <img className='w-[212px] h-[60px] lg:w-[261px] cursor-pointer' src={header_btn.src} alt="" />
          <div className="lg:flex hidden w-full justify-center gap-5 mt-5">
            <div className="w-[50px] h-[50px] bg-[#E14E60] rounded-full flex justify-center items-center cursor-pointer">
              <img src={redit_lofo.src} alt="" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#E14E60] rounded-full flex justify-center items-center cursor-pointer">
              <img src={telegram_logo.src} alt="" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#E14E60] rounded-full flex justify-center items-center cursor-pointer">
              <img src={twitter_logo.src} alt="" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#E14E60] rounded-full flex justify-center items-center cursor-pointer">
              <img className='bg' src={mlogo_logo.src} alt="" />
            </div>
          </div>
          <div className='w-full h-fit flex justify-center items-center gap-4 mt-10'>
            <img className='w-36 h-12 cursor-pointer' src={appstore.src} alt="" />
            <img className='w-36 h-12 cursor-pointer' src={playstore.src} alt="" />
          </div>
          {Number(width) > 980 ? <img id='left_war' className='absolute left-[-16px] lg:w-[300px] lg:h-[450px] top-[-150px]' src={left_war_res.src}/> : <img className='absolute left-[-16px] top-[35%] md:w-[300px] md:top-[20%]' src={war_left.src}/>}
        
        </div>
        </div>
      </div>
      
      <div className='h-[100vh] bg-[#04131B] mt-[-1px]'>
        <h1>helo</h1>
      </div>
    </main>
  );
}