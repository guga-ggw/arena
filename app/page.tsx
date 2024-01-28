import BarImage from './assets/Bar.png';
import LogoImage from './assets/arena_logo.png'
import './index.scss'


export default function Home() {
  return (
    <main className="w-full h-fit bg-red-500">
      <nav className="w-full h-16 bg-white flex justify-around items-center ">
        <img src={BarImage.src} alt="" />
        <img src={LogoImage.src} alt="" />
        <div className='w-12 h-6 bg-black rounded-xl'></div>
      </nav>
    </main>
  );
}