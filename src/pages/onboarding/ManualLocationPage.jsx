import { useNavigate } from "react-router-dom";
import { Input } from "../../component";
import Header from "../../component/Header";
import { TiLocationArrowOutline } from "react-icons/ti";
import { RiSearchLine } from "react-icons/ri";

export default function ManualLocationPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='my-24 px-4 space-y-24 max-w-4xl mx-auto'>
        <div className='space-y-16'>
          <div className='space-y-8'>
            <h1 className='font-bold mb-4 text-xl'>
              Enter your area apartment name
            </h1>
            <div className='space-y-4'>
              <Input
                hasIcon={true}
                child={<RiSearchLine size={24} color='#00C614' />}
                type='text'
                placeholder='First Name'
              />
              <button className='btn btn-ghost text-secondary'>
                <TiLocationArrowOutline size={20} /> Use my current location
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate("/upload-image")}
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
