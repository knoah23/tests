import { AiFillLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";

export default function FundWalletPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='px-4 pt-24 pb-10 flex flex-col justify-between h-screen max-w-4xl mx-auto'>
        <div>
          <h1 className='font-bold mb-4 text-xl'>Ready to start?</h1>
          <span className='text-neutral-content'>
            Fund your account to unlock seamless transactions and access a world
            of services at your fingertips.
          </span>
        </div>
        <img
          src='FundWallet.png'
          alt='Illustration of man funding a wallet'
          className='w-56 h-auto mx-auto my-0'
        />
        <div className='flex flex-col gap-4'>
          <button className='btn btn-primary btn-block'>Fund Wallet</button>
          <button onClick={() => navigate("/t&cs")} className='btn btn-block'>
            Fund Later
          </button>
          <div className='flex gap-2 items-center text-neutral-content'>
            <AiFillLock />
            <span>We do not store your financial information</span>
          </div>
        </div>
      </div>
    </>
  );
}
