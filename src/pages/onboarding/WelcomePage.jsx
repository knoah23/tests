import { AiFillLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";

export default function WelcomPage() {
  const navigate = useNavigate();
  const name = "Noah";
  return (
    <>
      <Header title='Back' />
      <div className='px-4 pt-24 pb-10 flex flex-col justify-between h-screen max-w-4xl mx-auto'>
        <div>
          <h1 className='font-bold mb-4 text-xl'>Welcome, {name}</h1>
          <span className='text-neutral-content'>
            What would you like to do today
          </span>
        </div>

        <img
          src='Craftsmen3D.svg'
          alt='Illustration of man funding a wallet'
          className='w-56 h-auto mx-auto my-0'
        />

        <div className='flex flex-col gap-4'>
          <button
            onClick={() => navigate("/post")}
            className='btn btn-primary btn-block'
          >
            Post a Job Request
          </button>
          <button onClick={() => navigate("/home")} className='btn btn-block'>
            Post a Job Request Later
          </button>
        </div>
      </div>
    </>
  );
}
