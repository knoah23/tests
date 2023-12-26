import { useNavigate } from "react-router-dom";
import { Input } from "../../component";
import Header from "../../component/Header";

export default function FullNamePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='my-24 px-4 space-y-24 max-w-4xl mx-auto'>
        <div className='space-y-16'>
          <div className='space-y-8'>
            <div>
              <h1 className='font-bold mb-4 text-xl'>What’s your name</h1>
              <span className='text-neutral-content'>
                Let us know how to properly address you
              </span>
            </div>
            <div className='space-y-4'>
              <Input type='text' placeholder='First Name' />
              <Input type='text' placeholder='Last Name' />
            </div>
          </div>
          <button
            onClick={() => navigate("/fund-wallet")}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
