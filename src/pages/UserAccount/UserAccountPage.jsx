import { Link } from "react-router-dom";
import { MobileHeader } from "../../component";
import { FaAngleRight } from "react-icons/fa";

export default function UserAccountPage() {
  const name = "Inioluwa Abiodun";
  const img = "Avatar.png";
  const number = "08023562567";

  return (
    <>
      <MobileHeader />
      <div className='pt-24 pb-12 px-4 flex flex-col gap-16'>
        <div className='flex flex-col gap-2 items-center'>
          <img
            src={img}
            alt='avatar'
            className='w-24 h-24 object-cover rounded-full'
          />
          <h1 className='font-bold text-xl'>{name}</h1>
          <span className='text-neutral-content'>{number}</span>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-xl'>Settings</h1>
          <ul className='flex flex-col gap-4'>
            <Link
              to='/change-number'
              className='flex items-center justify-between py-4 border-b border-neutral-content'
            >
              Change Password
              <FaAngleRight />
            </Link>

            <Link
              to='/help'
              className='flex items-center justify-between py-4 border-b border-neutral-content'
            >
              Help & Support
              <FaAngleRight />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
