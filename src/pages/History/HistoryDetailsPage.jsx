import { Link } from "react-router-dom";
import { Header } from "../../component";

export default function HistoryDetailsPage() {
  return (
    <>
      <Header title='Back' />
      <div className='pt-24 pb-12 px-4 flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <img
              src='Avatar.png'
              alt='user'
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='flex flex-col gap-2'>
              <span className='font-bold'>Noah Ayodele</span>
              <span className='text-neutral-content text-sm'>Carpenter</span>
            </div>
          </div>
          <Link to='/aritisian-profile' className='btn'>
            View Profile
          </Link>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-xl'>Location</h1>
          <span>13 Salami Street</span>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-xl'>Date & Time</h1>
          <span>13/12/23 | 3:00PM</span>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-xl'>Cost</h1>
          <span>10,000</span>
        </div>
      </div>
    </>
  );
}
