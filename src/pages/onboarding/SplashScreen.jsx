import { Link } from "react-router-dom";

export default function SplashScreen() {
  return (
    <>
      <div className='bg-[url("HandyMan.jpg")] relative text-base-100 bg-center bg-cover h-screen flex items-center justify-center'>
        <img src='LogoWhite.svg' alt='Logomark' className='w-56 h-auto' />
        <div className='absolute bottom-10 px-4 flex flex-col gap-8'>
          <span className='font-bold'>
            Connecting You with Skilled Artisans for Effortless Home Services
          </span>
          <Link to='/phone-number' className='btn'>
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
