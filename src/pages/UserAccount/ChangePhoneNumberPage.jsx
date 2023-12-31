import { useNavigate } from "react-router-dom";
import { Input } from "../../component";
import Header from "../../component/Header";

export default function ChangePhoneNumberPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='my-24 px-4 space-y-24 max-w-4xl mx-auto'>
        <div className='space-y-16'>
          <div className='space-y-8'>
            <div>
              <h1 className='font-bold mb-4 text-xl'>Change Phone Number</h1>
              <span className='text-neutral-content'>
                Put in your old and new phone number to change your phone number
              </span>
            </div>
            <div className='space-y-4'>
              <Input type='text' placeholder='Old phone number' />
              <Input type='text' placeholder='New phone nubmer' />
            </div>
          </div>
          <button
            onClick={() => navigate("/otp")}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Send OTP
          </button>
        </div>
      </div>
    </>
  );
}
