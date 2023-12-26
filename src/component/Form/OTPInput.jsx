import React, { useState, useRef } from "react";

export default function OTPInput({ onComplete }) {
  const numDigits = 4;
  const [otp, setOtp] = useState(Array(numDigits).fill(""));
  const inputRefs = Array(numDigits)
    .fill(0)
    .map((i) => useRef(null));

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value) || value === "") {
      return; // Allow only numeric values
    }

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      return newOtp;
    });

    // Move focus to the next input
    if (index < numDigits - 1 && value !== "") {
      inputRefs[index + 1].current.focus();
    }

    // Notify parent component when all digits are entered
    if (index === numDigits - 1 && value !== "") {
      onComplete(otp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      // Clear the current input and move focus to the previous input on backspace
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });

      // Move focus to the previous input on backspace
      if (index > 0 && otp[index] === "") {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <div className='grid grid-cols-4 gap-4 items-center'>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type='text'
          maxLength='1'
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className='px-4 h-16 rounded-lg bg-base-300 focus:outline-secondary'
        />
      ))}
    </div>
  );
}
