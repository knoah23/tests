import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function Input({ placeholder, type, hasIcon, child }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      {hasIcon ? (
        <div
          tabIndex='0' // This makes the div focusable
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`px-4 rounded-lg bg-base-300 flex items-center gap-2 ${
            isFocused ? "border border-secondary" : ""
          }`}
        >
          {child}
          <input
            type={type}
            placeholder={placeholder}
            className='focus:outline-none bg-transparent w-full py-4 h-full'
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className='p-4 rounded-lg bg-base-300 focus:outline-secondary w-full'
        />
      )}
    </>
  );
}
