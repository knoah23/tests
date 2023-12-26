import { AiFillLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";

export default function LocationPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='px-4 pt-24 pb-10 flex flex-col justify-between h-screen max-w-4xl mx-auto'>
        <div>
          <h1 className='font-bold mb-4 text-xl'>Where are you?</h1>
          <span className='text-neutral-content'>
            Enable location access for a seamless experience! Grant us
            permission to help artisans locate you effortlessly.
          </span>
        </div>
        <img
          src='Geotag.png'
          alt='Isometric illustration of location pin'
          className='w-24 h-auto mx-auto my-0'
        />
        <div className='flex flex-col gap-4'>
          <button className='btn btn-primary btn-block'>
            Set Automatically
          </button>
          <button
            onClick={() => navigate("/manual-location")}
            className='btn btn-block'
          >
            Enter Location Manually
          </button>
        </div>
      </div>
    </>
  );
}
