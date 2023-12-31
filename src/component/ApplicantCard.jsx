import { HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ApplicantCard({ name, img, jobDone, distance, pro }) {
  return (
    <div className='p-4 rounded-lg border border-neutral-content flex flex-col gap-6'>
      <div className='flex items-start gap-4'>
        <img src={img} className='w-12 h-12 rounded-full object-cover' />

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 items-center'>
            <h2 className='font-bold'>{name}</h2>
            {pro ? <span className='badge badge-primary'>Pro</span> : ""}
          </div>

          <span className='text-neutral-content flex items-center gap-2'>
            <HiOutlineBriefcase className='text-secondary' />
            {jobDone} Job Done
          </span>
          <span className='text-neutral-conent flex items-center gap-2'>
            <span className='text-secondary font-bold'>{distance}</span> mins
            away
          </span>
        </div>
      </div>
      <Link to='/aritisian-profile' className='btn btn-primary btn-block'>
        View Profile
      </Link>
      <div className='grid grid-cols-2 gap-4'>
        <button className='btn'>Accept</button>
        <button className='btn'>Decline</button>
      </div>
    </div>
  );
}
