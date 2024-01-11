import {
  HiChevronLeft,
  HiOutlinePhone,
  HiOutlineUserCircle,
  HiPaperAirplane,
} from "react-icons/hi";
import { Input } from "../../component";
import { Link, useNavigate } from "react-router-dom";

export default function InboxDetailsPage({ pro }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className='fixed top-0 left-0 w-full'>
        <div className='flex items-center justify-between p-4 bg-base-100'>
          <button onClick={goBack} className='btn btn-ghost px-0'>
            <HiChevronLeft size={24} />
            <img
              src='Avatar.png'
              alt='use'
              className='w-6 h-6 object-cover rounded-full'
            />
            <span className='font-bold'>Noah Ayodele</span>
          </button>
          <div className='flex gap-2'>
            <Link to='/aritisian-profile' className='btn'>
              <HiOutlineUserCircle size={20} />
            </Link>
            <a href='tel:+2348023562567' className='btn'>
              <HiOutlinePhone size={20} />
            </a>
            <button className='btn btn-square btn-primary'>Done</button>
          </div>
        </div>
      </div>

      <div className='pt-24 pb-4 px-4 flex flex-col gap-8 h-screen'>
        <div className='h-full flex flex-col justify-end'>
          <div className='chat chat-end'>
            <div className='chat-bubble'>Wagawan</div>
          </div>

          <div className='chat chat-start'>
            <div className='chat-bubble chat-bubble-accent'>
              How far how you dey boss
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Input placeholder='type message' />
          <button className='btn btn-square btn-primary'>
            <HiPaperAirplane size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
