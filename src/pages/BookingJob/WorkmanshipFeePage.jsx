import { GrNotes, GrUserWorker } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdCalendarToday } from "react-icons/md";

export default function WorkmanshipFeePage() {
  const navigate = useNavigate();
  const fee = "2,000 NGN";
  const service = "Barber";
  const address = "13, Salami Street Mende Maryland";
  const date = "12/27/2023 5:00PM";
  const description = "I want to do a sofa with leather material and a bed";
  return (
    <>
      <Header title='Back' />
      <div className='pt-24 space-y-16 pb-10 px-4'>
        <div className='space-y-8'>
          <div className='space-y-4 pb-8 border-b border-neutral-content'>
            <span className='text-neutral-content'>
              Workmanship Fee for this service.
            </span>
            <h1 className='font-bold text-2xl'>{fee}</h1>
          </div>
          <div className='space-y-4'>
            <h1 className='font-bold text-2xl'>Confirm Request</h1>
            <ul className='flex flex-col gap-4 p-4 bg-base-300 rounded-lg'>
              <li className='flex gap-4 items-center py-4'>
                <GrUserWorker size={22} className='text-secondary' />
                {service}
              </li>
              <li className='flex gap-4 items-center py-4'>
                <HiOutlineLocationMarker size={20} className='text-secondary' />
                {address}
              </li>
              <li className='flex gap-4 items-center py-4'>
                <MdCalendarToday size={20} className='text-secondary' />
                {date}
              </li>
              <li className='flex gap-4 items-center py-4'>
                <GrNotes size={28} className='text-secondary' />
                {description}
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => navigate("/payment")}
          className='btn btn-primary btn-block'
        >
          Confirm
        </button>
      </div>
    </>
  );
}
