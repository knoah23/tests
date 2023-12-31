import { FaAngleRight, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HistoryItem({ id, title, address, amount, link }) {
  return (
    <Link
      to={link}
      key={id}
      className='flex items-center justify-between border-b-1 border-neutral-content rounded-none px-0'
    >
      <div className='flex items-center gap-4'>
        <FaRegClock size={24} />
        <div className='flex flex-col gap-1'>
          <h1 className='font-bold text-lg'>{title}</h1>
          <span className='text-neutral-content'>
            {address} | {amount}NGN
          </span>
        </div>
      </div>
      <FaAngleRight />
    </Link>
  );
}
