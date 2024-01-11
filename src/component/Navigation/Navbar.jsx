import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
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
        <ul className='navbar-center menu menu-horizontal'>
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
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </nav>
    </div>
  );
}
