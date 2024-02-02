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
import abt_btn from './assets/about+btn.png'
import res_arena_inf from './assets/inf_res.png'
import res_arena_char from './assets/res_chart.png'
import strokes from './assets/strokes.png'
import star from './assets/star.png'
import token_1 from './assets/token1.png'
import token_2 from './assets/token2.png'
import token_3 from './assets/token3.png'
import token_4 from './assets/token4.png'
import token_5 from './assets/token5.png'
import token_6 from './assets/token6.png'
import whitepaper from './assets/whitepaper.png'
import masterdeck from './assets/masterdeck.png'
import down_arrow from './assets/down_arrow.png'
import video_template from './assets/video.png'
import res_video from './assets/videso.png'
import design_concept from './assets/design_concept.png'
import pht_tem from './assets/pht_tem1.png'
import pht_lefr from './assets/pht_left.png'
import pht_right from './assets/pht_right.png'
import left_arr from './assets/arrow_left.png'
import right_arr from './assets/arrow_right.png'
import res_pht from './assets/res_pht.png'
import des_ls_img from './assets/concept_ls_img.png'
import des_m_img from './assets/concept_mm_img.png'
import des_r_img from './assets/concept_rm_img.png'
import roadmap from './assets/roadmap.png'
import complete_mark from './assets/complete_mark.png'
import uncomplete from './assets/uncomplete_mark.png'
import bear from './assets/bear_res.png'
import fox from './assets/fox_res.png'
import wolf from './assets/wolf_res.png'
import scorpio from './assets/scorpio_res.png'
import bear_res from './assets/bear.png'
import fox_res from './assets/fox.png'
import wolf_res from './assets/wolf.png'
import scorpio_res from './assets/scorpio.png'
import stick from './assets/stick.png'
import tokenomics from './assets/tokenomics.png'
import list from './assets/list.png'
import circle from './assets/crc.png'
import circle_res from './assets/crc_ress.png'
import list_res from './assets/list_res.png'
import team from './assets/team.png'

import './index.scss';
import useWindowResize from './hooks/useWindowResize';
import { useState } from 'react';


export default function Home() {

  const navlist = ['Home', 'About Us', 'Design concept', 'Roadmap', 'Tokenomics', 'Our team', 'Partners', 'Whitepaper', 'Arena Master Deck']
  const token_list = [
    {
      text : "Competing in PVE battles to win leaderboard prizes",
      img : token_1
    },
    {
      text : "Competing in PVP battles against players",
      img : token_2
    },
    {
      text : "NFT Rewards ",
      img : token_3
    },
    {
      text : "Single Asset staking",
      img : token_4
    },
    {
      text : "In-game rewards",
      img : token_5
    },
    {
      text : "In-game bonuses",
      img : token_6
    },
  ]

  const RoadmapData = [
    ['Lite Paper', 'White paper', 'Smart Contract', 'Contract Audit', 'New HUD', 'Seed Round'],
    ['Public Sale', 'Obtain Coingecko Listing', 'Obtain Coinmarketcap Listing', 'Centralized exchange Listing', 'Game Launch On GameXChange', 'Game Currency Integration'],
    ['NFT Marketplace and NFT Rewards', 'NFT Pair Staking/Forming', 'NFT Asset Games Integration', 'Single Asset Staking', 'Additional NFT Assets', 'Additional Characters'],
    ['Game rewards for game asset & NFT', 'New NFT Collectibles','Collaboration With Influencers','User-Generated Events','New Partnerships','VR gallery','Arena Mastser VR (Quest 2)']
    
  ]

  const [navtoggle, settoggle] = useState(false)


  const {height, width} = useWindowResize()

  return (
    <main className="w-full h-fit bg-[#04131B]"> 
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

      <nav className='w-full h-14 bg-white flex px-4 justify-between items-center lg:h-24 lg:px-11 xl:px-20'>
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
        <img className='absolute right-8 top-40 w-[90px] h-[90px] hidden lg:block' src={star.src} alt="" />
        <img className='absolute w-full h-full top-0 left-0 md:hidden' src={home_bg.src} alt="" />
        {Number(width) > 980 ? <img id='left_war' className='absolute right-0 top-0 sm:top-[-20px] z-10 lg:top-[35%] lg:w-[250px] lg:h-[450px] ' src={right_war_res.src}/> : <img className='absolute right-0 top-0 sm:top-[-20px] z-10 lg:top-[10%] lg:w-[500px] lg:h-[600px]' src={war_right.src}/>}
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
            <img className='w-32 h-12 cursor-pointer  sm:w-36' src={appstore.src} alt="" />
            <img className='w-32 h-12 cursor-pointer sm:w-36' src={playstore.src} alt="" />
          </div>
          {Number(width) > 980 ? <img id='left_war' className='absolute left-[-16px] lg:w-[300px] lg:h-[450px] top-[-20px]' src={left_war_res.src}/> : <img className='absolute left-[-16px] top-[30%] md:w-[300px] md:top-[20%]' src={war_left.src}/>}
        
        </div>
        </div>
      </div>
      
      <div className='h-fit bg-[#04131B] mt-[-1px] flex justify-center items-center flex-col lg:pt-10 relative'>
        <img className='absolute left-0 top-0 hidden lg:block' src={strokes.src} alt="" />
        <img className='w-40 h-20 lg:w-56' src={abt_btn.src} alt="" />
        <div className='w-full h-fit flex flex-col text-center gap-12 mt-12 lg:w-[85%] lg:px-12'>
          <div className="w-full h-1/2 justify-center items-center flex flex-col px-4 lg:flex-row lg:justify-between">
            <p className='leading-6 flex flex-col gap-8 text-white text-opacity-60 font-light text-[14px] w-[95%] lg:w-7/12 lg:text-left'>
            <h2 className='mt-10 font-bold text-white text-[20px]'>Arena master</h2>
              Arena Master is a tokenized online video game developed by Sambrela. 
              Sambrela boasts great expertise in blockchain technology and mobile game development. 
              Our sole aim is to provide a real-life gaming experience for 
              people in the gaming domain, blockchain technology and the world as a whole.
              </p>
              <img className='h-[200px] w-[230px] lg:translate-y-7 lg:h-60 lg:w-80 lg:translate-x-16' src={res_arena_inf.src} alt="" />
          </div>
          <div className="w-full h-1/2 justify-center items-center flex flex-col px-4 lg:flex-row-reverse lg:justify-between">
            <p className='leading-6 text-white text-opacity-60 font-light text-[14px] w-[95%] lg:w-5/12'>
                We are a team of amazing people with a sharp focus on building NFTs 
                and skill-based games in the mobile space and exploring other types of gaming on 
                different platforms to bring fun and entertainment to the blockchain industry.
              </p>
              {Number(width) > 980 ? <img id='characters_img' className='' src={res_arena_char.src} alt="" /> : <img id='characters_img' className='h-[230px] w-[100%] sm:w-[90%] md:w-[60%] lg:w-1/2 lg:h-[270px] lg:translate-y-[-60px]' src={res_arena_char.src} alt="" />}
              
          </div>
        </div>
      </div>
      <div className='h-fit bg-[#04131B] pt-9 w-full flex justify-center items-center pb-7 mt-[-1px]'>
      <div className="w-[92%] h-[526px] bg-gradient-to-br from-[#c4525fd6] to-[#04131B] rounded-[10px] relative p-[1.5px] mt-16 lg:h-[273px] lg:w-[80%] ">
        <h1 className='absolute left-1/2 translate-x-[-50%] font-extrabold text-[16px] leading-6 text-white w-48 bg-[#04131B] top-[-10px] text-center'>AMT TOKEN UTILITY</h1>
        <div className="w-full h-full bg-[#04131B] rounded-[10px] px-8 flex justify-center lg:pl-20 items-start flex-wrap lg:justify-around lg:items-center ">
            {token_list.map((token) => (
                  <div className='flex items-center justify-start w-full lg:w-[30%] lg:justify-start h-16 pt-9 '>
                    <img src={token.img.src} alt="" />
                    <h2 className='text-white font-regular text-[14px] text-opacity-90'>{token.text}</h2>
                  </div>
            ))}
        </div>
        </div>
      </div>
      <div className='h-fit w-full bg-[#04131B]'>
        <div className="mt-[-1px] w-full h-fit lg:gap-28 lg:py-32 flex flex-wrap justify-center items-center py-6 gap-10">
          <img src={whitepaper.src} alt="" />
          <img src={masterdeck.src} alt="" />
        </div>
        <div className="w-full h-fit py-2 justify-center flex flex-col items-center">
          <h1 className='font-bold text-[20px] leading-5 text-white mt-9'>CHECK OUT OUR NEW VIDEO</h1>
          <img className='mt-4' src={down_arrow.src} alt="" />
          {Number(width) > 650 ? <img id='characters_img' className='w-[80%] mt-7 lg:w-[840px] h-[400px]' src={res_video.src} alt="" /> : <img className='mt-0 w-[100%] h-[386px]' src={video_template.src} alt="" />}
        </div>
      </div>
      <div className="mt-[-1px] w-full h-fit pb-28 flex flex-col items-center bg-[#04131B]">
        <img className='w-56 h-20 lg:mt-52 md:mt-24' src={design_concept.src} alt="" />
        <div className='mt-10 flex w-full items-center justify-center relative gap-3 lg:mt-16 flex-col'>
          <img className='absolute left-0 top-[-80px] md:w-12 md:hidden' src={pht_lefr.src} alt="" />
          <div className='flex w-full justify-center xl:gap-6 gap-3'>
            <img className='h-80 cursor-pointer lg:h-96 hidden md:block xl:h-auto  ' src={left_arr.src} alt="" />
            {Number(width) > 980 ?  <img className='w-[800px] h-96 xl:w-auto xl:h-auto' src={res_pht.src} alt="" />: <img className='h-48 w-80 sm:h-60 sm:w-96  md:w-[550px] md:h-80' src={pht_tem.src} alt="" />}
            <img className='h-80 cursor-pointer lg:h-96 hidden md:block xl:h-auto' src={right_arr.src} alt="" />
          </div>
          {Number(width) > 1440 ?  
          <div className='w-[1060px] h-[263px]  flex items-start justify-between  relative'>
            <div className='relative'>
            <img className='h-full cursor-pointer' src={des_ls_img.src} alt="Explore New Lands" />
            <h1 className='leading-8 text-[24px] font-black w-2/3 text-white absolute top-3 left-3'>EXPLORE NEW LANDS</h1>
            </div>
            <div className='relative'>
            <img className='h-full cursor-pointer ' src={des_m_img.src} alt="" />
            <h1 className='leading-8 text-[24px] font-black w-2/3 text-white absolute top-3 left-3'>ExBattle on Diverse Arenas</h1>
            </div>
            <div className='relative'>

            <img className='h-full cursor-pointer ' src={des_r_img.src} alt="" />
            <h1 className='leading-8 text-[24px] font-black w-2/3 text-white absolute top-3 left-3'>Collect NFT Characters</h1>
            </div>
          </div>
          : ""}
          <img className='absolute right-0 top-[-80px] md:w-44 md:hidden' src={pht_right.src} alt="" />
        </div>
        
      </div>
      <div className='w-full h-fit pb-10 flex items-center flex-col text-center'>
            <img className='w-40 h-20' src={roadmap.src} alt="" />
            
            <p className='mt-10 text-white font-extralight leading-6 text-opacity-80 text-[14px] w-[90%] lg:w-[60%]'>
            Arena Master is a tokenized online video game developed by Sambrela. 
            Sambrela boasts great expertise in blockchain technology and mobile game development. 
            Our sole aim is to provide a real-life gaming experience for people in the 
            </p>
            <div className='w-full h-fit flex flex-col gap-14 mt-10 relative'>
              <div className='hidden xl:flex absolute w-[60px] h-[60px] left-1/2 translate-x-[-50%] top-64 z-30 bg-[#C45260] rounded-full  justify-center items-center'>
                <h2 className='font-bold text-[30px] text-white'>1</h2>
              </div>

              <div className='hidden xl:flex absolute w-[60px] h-[60px] left-1/2 translate-x-[-50%] top-[800px] z-30 bg-[#C45260] rounded-full  justify-center items-center'>
                <h2 className='font-bold text-[30px] text-white'>2</h2>
              </div>

              <div className='hidden xl:flex absolute w-[60px] h-[60px] left-1/2 translate-x-[-50%] top-[1350px] z-30 bg-black border-white border-[1px] rounded-full  justify-center items-center'>
                <h2 className='font-bold text-[30px] text-white'>3</h2>
              </div>

              <div className='hidden xl:flex absolute w-[60px] h-[60px] left-1/2 translate-x-[-50%] top-[1850px] z-30 bg-black border-white border-[1px] rounded-full  justify-center items-center'>
                <h2 className='font-bold text-[30px] text-white'>4</h2>
              </div>

              <img className='hidden xl:block absolute left-1/2 top-24 translate-x-[-50%]' src={stick.src} alt="" />
             
             
              <div className='flex flex-col justify-center items-center relative'>
                <div className='flex w-full justify-center gap-60'>
                  <div className='w-full flex flex-col items-center'>
                  <h1 className='text-white text-[46px] font-extrabold leading-[42px]'>Q4</h1>
                    <p className='font-bold text-white leading-5 mt-4'>2021 year</p>
                    <div className='w-[90%] h-[374px] bg-[#091828] mt-8 rounded-[10px] shadow-2xl bg-opacity-40 sm:w-[400px] justify-center flex flex-col gap-3 px-6 relative' style={{ boxShadow: 'inset 0 0 10px #17559B' }}>
                        {RoadmapData[0].map((item) => (
                          <div className='flex items-center gap-3 '>
                            <img src={complete_mark.src} alt="" />
                            <h2 className='text-[14px] text-white text-opacity-85'>{item}</h2>
                          </div>
                          
                          ))}
                      </div>
                    </div>
                 <img className='hidden xl:block' src={bear_res.src} alt="" />
               </div>
               <img className='absolute top-[-50px] right-0 xl:hidden' src={bear.src} alt="" />
              </div>
              <div className='flex flex-col justify-center items-center relative'>
              <div className='flex w-full justify-center gap-60'>
              <img className='hidden xl:block' src={fox_res.src} alt="" />
              <div className='w-full flex flex-col items-center'>
              <h1 className='text-white text-[46px] font-extrabold leading-[42px]'>Q1-Q2</h1>
                <p className='font-bold text-white leading-5 mt-4'>2022 year</p>
                <div className='w-[90%] h-[374px] bg-[#091828] mt-8 rounded-[10px] shadow-2xl bg-opacity-40 sm:w-[400px] justify-center flex flex-col gap-3 px-6 relative' style={{ boxShadow: 'inset 0 0 10px #17559B' }}>
                    {RoadmapData[1].map((item) => (
                      <div className='flex items-center gap-3 '>
                        <img src={uncomplete.src} alt="" />
                        <h2 className='text-[14px] text-white text-opacity-85'>{item}</h2>
                      </div>
                      
                      ))}
                      </div>
                 </div>
                 
               </div>
               <img className='absolute top-[-80px] left-0 xl:hidden' src={fox.src} alt="" />
              </div>
              <div className='flex flex-col justify-center items-center relative'>
                
                <div className='flex w-full justify-center gap-60'>
                <div className='w-full flex flex-col items-center'>
              <h1 className='text-white text-[46px] font-extrabold leading-[42px]'>Q3</h1>
                <p className='font-bold text-white leading-5 mt-4'>2021 year</p>
                <div className='w-[90%] h-[374px] bg-[#091828] mt-8 rounded-[10px] shadow-2xl bg-opacity-40 sm:w-[400px] justify-center flex flex-col gap-3 px-6 relative' style={{ boxShadow: 'inset 0 0 10px #17559B' }}>
                    {RoadmapData[2].map((item) => (
                      <div className='flex items-center gap-3 '>
                        <img src={uncomplete.src} alt="" />
                        <h2 className='text-[14px] text-white text-opacity-85'>{item}</h2>
                      </div>
                      
                      ))}
                      </div>
                 </div>
                 <img className='hidden xl:block' src={wolf_res.src} alt="" />
               </div>
               <img className='absolute top-[-10px] right-0 xl:hidden' src={wolf.src} alt="" />
              </div>
              <div className='flex flex-col justify-center items-center relative'>
              <div className='flex w-full justify-center gap-60'>
              <img className='hidden xl:block' src={scorpio_res.src} alt="" />
              <div className='w-full flex flex-col items-center'>
              <h1 className='text-white text-[46px] font-extrabold leading-[42px]'>Q4</h1>
                <p className='font-bold text-white leading-5 mt-4'>2021 year</p>
                <div className='w-[90%] h-[374px] bg-[#091828] mt-8 rounded-[10px] shadow-2xl bg-opacity-40 sm:w-[400px] justify-center flex flex-col gap-3 px-6 relative' style={{ boxShadow: 'inset 0 0 10px #17559B' }}>
                    {RoadmapData[3].map((item) => (
                      <div className='flex items-center gap-3 '>
                        <img src={uncomplete.src} alt="" />
                        <h2 className='text-[14px] text-white text-opacity-85'>{item}</h2>
                      </div>
                      
                      ))}
                      </div>
                 </div>
                 
               </div>
               <img className='absolute top-[-40px] left-0 xl:hidden' src={scorpio.src} alt="" />
              </div>
      </div>
      </div>
      <div className='w-full h-fit flex flex-col items-center pt-5 pb-36'>
        <img className='w-44 h-20 mt-11 lg:w-64' src={tokenomics.src} alt="" />
        <p className='w-[95%] text-[14px] text-center text-white text-opacity-75 mt-9 lg:w-[60%]'>
          Arena Master is a tokenized online video game developed by Sambrela. 
          Sambrela boasts great expertise in blockchain technology and mobile game development.
           Our sole aim is to provide a real-life gaming experience for people in the 
        </p>
        <div className="w-full h-fit py-8 mt-14 flex flex-col items-center gap-14 bg-gradient-to-b from-[#042B3E] to-[#04131B] rounded-3xl lg:w-[85%] lg:flex-row lg: justify-around">
        {Number(width) > 1440 ?  
        <>
        <img src={list_res.src} alt="" />
        <img src={circle_res.src} alt="" />
        </> :
         <>
         <img src={list.src} alt="" />
          <img className='w-full sm:w-[400px]' src={circle.src} alt="" />
        </> }
          
        </div>
      </div>
      <div className='h-96 flex justify-center'>
        <img className='w-44 h-20 mt-11 lg:w-64' src={team.src} alt="" />
      </div>
    </main>
  );
}