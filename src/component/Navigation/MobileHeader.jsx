import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import {
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineHome,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const linkStyle = "flex items-center gap-4 py-4 hover:bg-base-300";
  return (
    <>
      <div className='z-50 fixed top-0 left-0 w-full bg-gradient-to-b from-black/25 to-transparent'>
        <nav className='flex items-center gap-4 p-4 md:px-12'>
          <button onClick={toggle} className='btn btn-square '>
            <AiOutlineMenu size={20} />
          </button>
          <img src='Logo.svg' alt='Logo Mark' className='w-32 md:w-36 h-auto' />
        </nav>
      </div>
      {toggleMenu && (
        <div
          onClick={toggle}
          className='w-full h-screen duration-1000 ease-in-out overflow-hidden z-50 bg-[#0000007e] backdrop-blur-md fixed top-0 left-0'
        >
          <div
            onClick={stopPropagation}
            className='h-full duration-700 ease-in-out w-60 px-4 bg-base-100 flex flex-col gap-12 py-12'
          >
            <div className='flex items-center justify-between'>
              <img src='Logo.svg' alt='Logomark' className='w-36 h-auto' />
              <button onClick={toggle}>
                <GrFormClose size={25} />
              </button>
            </div>

            <ul className='flex flex-col gap-4'>
              <Link to='/home' className={linkStyle}>
                <HiOutlineHome size={20} className='text-secondary' />
                Home
              </Link>
              <Link to='/created-jobs' className={linkStyle}>
                <HiOutlineBriefcase size={20} className='text-secondary' />
                Posted Job
              </Link>
              <Link to='/inbox' className={linkStyle}>
                <BiEnvelope size={20} className='text-secondary' />
                Inbox
              </Link>
              <Link to='/history' className={linkStyle}>
                <HiOutlineClock size={20} className='text-secondary' />
                History
              </Link>
              <Link to='/wallet' className={linkStyle}>
                <HiOutlineCreditCard size={20} className='text-secondary' />
                Wallet
              </Link>
              <Link to='/user-account' className={linkStyle}>
                <HiOutlineUserCircle size={20} className='text-secondary' />
                Account
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
