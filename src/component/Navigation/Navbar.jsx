import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleNav = () => {
    setToggle(!toggle);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className={`fixed z-20 w-full top-0 left-0 bg-base-100
          ${navbar ? " border-b border-gray-100" : ""}
        `}
      >
        <nav className='navbar max-w-7xl m-auto'>
          <div className='navbar-start'>
            <a href='/'>
              <img
                src='/LogoMark.svg'
                alt='Craftsmen Logo'
                className='w-32 h-auto'
              />
            </a>
          </div>
          <ul className='navbar-center md:flex menu menu-horizontal hidden'>
            <li>
              <a href='/about'>About Us</a>
            </li>
            <li>
              <a href='/our-services'>Services</a>
            </li>
            <li>
              <a href='/contact'>Contact Us</a>
            </li>
          </ul>
          <div className='navbar-end'>
            <button className='md:block btn btn-primary hidden'>
              Get Started
            </button>
            <button onClick={toggleNav} className='btn btn-square md:hidden'>
              <AiOutlineMenu />
            </button>
          </div>
        </nav>
      </div>

      {toggle && (
        <div
          onClick={toggleNav}
          className='w-full h-full pt-8 z-[40] px-4 bg-[#0000007e] backdrop-blur-md fixed top-0 left-0'
        >
          <ul
            onClick={stopPropagation}
            className='menu menu-vertical z-[60] bg-base-100 space-y-6 p-4 rounded-lg'
          >
            <div className='flex items-center justify-between'>
              <img src='BadgeLogo.svg' alt='logo' className='w-24 h-auto' />
              <button onClick={toggleNav}>
                <GrFormClose size={25} />
              </button>
            </div>

            <Link
              reloadDocument
              to='/'
              className='py-4 border-b border-base-neutral-content'
            >
              Home
            </Link>
            <Link
              reloadDocument
              to='/about'
              className='py-4 border-b border-base-neutral-content'
            >
              About
            </Link>
            <Link
              reloadDocument
              to='/our-services'
              className='py-4 border-b border-base-neutral-content'
            >
              Services
            </Link>
            <Link
              reloadDocument
              to='/contact'
              className='py-4 border-b border-base-neutral-content'
            >
              Contact Us
            </Link>
            <Link to='/splash' className='btn btn-primary'>
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
