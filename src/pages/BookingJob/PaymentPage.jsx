import { MdCreditCard } from "react-icons/md";
import { Header } from "../../component";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const balance = "2000.00";
  const price = "1000";
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='px-4 space-y-24 pt-24'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <MdCreditCard size={24} className='text-secondary' />
            <div>
              <h1 className='font-bold'>Wallet Balance</h1>
              <span className='text-neutral-content text-sm'>{balance}</span>
            </div>
          </div>
          <button className='btn'>Top Up</button>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-xl'>Pay Workmanship Fee</h1>
          <span className='text-neutral-content'>
            You must pay workmanship fee to validate request.
          </span>
          <button onClick={() => navigate("/home")} className='btn btn-primary'>
            Pay {price} NGN
          </button>
        </div>
      </div>
    </>
  );
}
