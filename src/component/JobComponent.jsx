import { Link } from "react-router-dom";

export default function JobComponent({ title, description, link }) {
  return (
    <Link
      to={link}
      className='cursor-pointer card card-compact rounded-lg w-full bg-base-100 border border-neutral-content'
    >
      <figure className='h-32'>
        <img src='default.jpg' alt='image' className='object-cover w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>

        <div>
          <p className='text-sm text-neutral-content'>Applicants</p>
          <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
            <div className='avatar'>
              <div className='w-6'>
                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
            <div className='avatar'>
              <div className='w-6'>
                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
            <div className='avatar'>
              <div className='w-6'>
                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
            <div className='avatar'>
              <div className='w-6'>
                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
