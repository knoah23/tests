import { useNavigate } from "react-router-dom";
import { Input } from "../../component";
import Header from "../../component/Header";
import { CiCircleInfo } from "react-icons/ci";

export default function PhoneNumberPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='my-24 px-4 space-y-24 max-w-4xl mx-auto'>
        <div className='space-y-16'>
          <div className='badge badge-secondary badge-outline bg-[#EBFAEC] gap-2'>
            <CiCircleInfo /> Continuing as a USER
          </div>
          <div>
            <h1 className='font-bold mb-4 text-xl'>Enter your phone number</h1>
            <div className='flex gap-4'>
              <button className='btn btn-square'>
                <img src='NG.svg' alt='Nigeria Flag' className='w-8 h-auto' />
              </button>
              <Input type='tel' placeholder='+234 000 000 0000' />
            </div>
          </div>
          <button
            onClick={() => navigate("/otp")}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Next
          </button>
        </div>

        <div className='divider'>Or</div>

        <div className='space-y-4'>
          <button className='btn btn-outline rounded-full btn-block'>
            <img src='GoogleIcon.svg' alt='Google Icon' />
            Continue with Google
          </button>
          <button className='btn btn-outline rounded-full btn-block'>
            <img src='FacebookIcon.svg' alt='Facebook Icon' />
            Continue with Google
          </button>
        </div>
      </div>
    </>
  );
}
