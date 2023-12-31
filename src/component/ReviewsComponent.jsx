import { FiThumbsUp } from "react-icons/fi";

export default function ReviewsComponent({ img, name, review, click }) {
  return (
    <div className='flex flex-col gap-6 py-4 border-b border-neutral-content'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img
            src={img}
            alt='avatar'
            className='w-6 h-6 object-cover rounded-full'
          />
          <span className='font-bold flex items-center gap-2'>
            {name} <FiThumbsUp className='text-secondary' />
          </span>
        </div>
        <button onClick={click} className='btn btn-sm'>
          Report
        </button>
      </div>
      <p>{review}</p>
    </div>
  );
}
