import { MdOutlineStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function InboxItem({ time, name, link }) {
  return (
    <Link
      to={link}
      className='flex items-center justify-between py-4 border-b border-neutral-content'
    >
      <div className='flex gap-4 items-center'>
        <img
          src='Avatar.png'
          alt='image'
          className='w-8 h-8 object-cover rounded-full'
        />
        <div className='flex flex-col gap-1'>
          <span className='font-bold'>{name}</span>
          <span className='text-sm text-neutral-content'>{time} min ago</span>
        </div>
      </div>
      <button className='btn'>
        <MdOutlineStarOutline size={20} />
      </button>
    </Link>
  );
}
