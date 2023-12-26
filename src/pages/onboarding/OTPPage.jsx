import { useNavigate } from "react-router-dom";
import { OTPInput } from "../../component";
import Header from "../../component/Header";

export default function OTPPage() {
  const number = "08023562567";

  const handleOtpComplete = (otp) => {
    console.log("OTP entered:", otp);
    // You can now send the OTP to your server for verification or perform any other actions
  };
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='my-24 px-4 space-y-24 max-w-4xl mx-auto'>
        <div className='space-y-16'>
          <div className='space-y-8'>
            <div>
              <h1 className='font-bold mb-4 text-xl'>Enter Code</h1>
              <span className='text-neutral-content'>
                A code was sent to{" "}
                <span className='text-secondary'>{number}</span>
              </span>
            </div>
            <OTPInput onComplete={handleOtpComplete} />
          </div>
          <button
            onClick={() => navigate("/name")}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Confrim OTP
          </button>
        </div>
      </div>
    </>
  );
}
