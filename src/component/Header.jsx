import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Header({ title }) {
  const [scrolled, setScrolled] = useState(false);

  // ON SCROLL FUNCTION
  const addBorderBottom = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", addBorderBottom);

  //   NAVIGATION CODE
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full pt-2 z-10 bg-base-100 border-b ${
        scrolled ? "border-gray-100" : "border-none"
      } `}
    >
      <button onClick={goBack} className='btn btn-ghost normal-case'>
        <IoIosArrowBack size={20} />
        <span className='font-bold text-lg'>{title}</span>
      </button>
    </div>
  );
}
