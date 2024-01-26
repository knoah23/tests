import React from "react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";

function footer({ links = true }) {
  const menuData = [
    {
      title: "Company",
      links: [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Services", href: "/services" },
      ],
    },
    {
      title: "Supprort",
      links: [
        { text: "FAQs", href: "#FAQ" },
        { text: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy ", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];
  return (
    <footer className='pt-32 w-full flex flex-col items-center justify-center md:px-0 gap-4'>
      <div className='flex flex-wrap justify-between items-start w-full px-8 md:max-w-6xl md:px-0'>
        <div className='w-full text-left md:max-w-sm'>
          <img src='/LogoMark.svg' alt=' logo' className='w-32 h-auto mb-6' />
          <p className='mb-12'>
            CraftsmenVilla, where skilled Nigerian craftsmen and customers
            converge on a user-friendly platform, transforming the way artisanal
            services are accessed and delivered.
          </p>
        </div>

        {links && (
          <div className='flex flex-wrap items-start justify-between gap-10'>
            {menuData.map((section, index) => (
              <div key={index}>
                <span className='font-bold'>{section.title}</span>
                <ul className='flex flex-col gap-4 mt-6'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className='flex items-center gap-3 hover:text-blue'
                      >
                        {link.icon && React.cloneElement(link.icon)}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='py-4 md:py-20 pb-10 px-8 md:px-0 w-full md:max-w-6xl flex flex-wrap items-center justify-between border-t border-neutral-content'>
        <span>Copyright © 2024. CraftsmenVilla.</span>
        <ul className='flex w-full md:w-auto pt-10 md:pt-0 items-center gap-4 md:gap-10 justify-center text-primary'>
          <li>
            <a href='/'>
              <FaXTwitter size={24} />
            </a>
          </li>
          <li>
            <a href='/'>
              <TiSocialFacebook size={30} />
            </a>
          </li>
          <li>
            <a href='/'>
              <AiOutlineInstagram size={24} />
            </a>
          </li>
          <li>
            <a href='/'>
              <AiOutlineLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;
