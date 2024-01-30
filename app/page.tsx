import BarImage from './assets/Bar.png';
import LogoImage from './assets/arena_logo.png'
import war_right from './assets/warrior-right.png' 
import war_left from './assets/warrior-left.png'
import header_btn from './assets/button.png'
import appstore from './assets/appstore.png'
import playstore from './assets/playstore.png'
import './index.scss'


export default function Home() {
  return (
    <main className="w-full h-fit">
      <nav className="w-full h-16 bg-white flex justify-around items-center ">
        <img src={BarImage.src} alt="" />
        <img src={LogoImage.src} alt="" />
        <div className='w-12 h-6 bg-black rounded-xl'></div>
      </nav>
      <div className='w-full items-center bg-[#05131A] h-[760px] text-center flex flex-col overflow-hidden p-3 relative'>
        <img src={war_right.src} className='absolute right-0 top-0 md:w-[400px] md:top-1/2 md:translate-y-[-50%] lg:w-[600px]' alt="" />
        <h1 className='text-white text-4xl w-full pr-[126px] mt-12 text-left sm:h-[20%] sm:p-8 sm:w-[95%] md:text-center md:w-[500px] md:pr-0 lg:text-5xl' id='header_txt'>
          ARENA AWAITS YOU, <span className='text-[#C45260]'>MY LORD</span>
        </h1>
        <p className='w-[95%] lg:text-white lg:text-opacity-85 lg:mt-6 mt-8 text-left sm:mt-16 sm:w-[80%] md:w-[50%] lg:w-[35%] md:text-[13px] md:mt-1 md:text-center'>Most extreme place you’ve experienced in your life, many characters, 
          amazing battlefield and your gameplay is what it takes to be the best!
        </p>
        <img className='w-52 mt-16' src={header_btn.src} alt="" />
        <div className='flex mt-28 w-full gap-5 justify-center'>
          <img className='w-36' src={appstore.src} alt="" />
          <img className='w-36' src={playstore.src} alt="" />
        </div>
        <img src={war_left.src} className='absolute left-0 top-[50%] md:w-[400px] md:top-1/2 md:translate-y-[-30%] lg:w-[600px]' alt="" />
      </div>
    </main>
  );
}