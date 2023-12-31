import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { ApplicantCard, Header } from "../../component";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function JobDetail() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const buttons = {
    prevArrow: (
      <button className='btn btn-ghost'>
        <HiChevronLeft size={24} color='white' />
      </button>
    ),
    nextArrow: (
      <button className='btn btn-ghost'>
        <HiChevronRight size={24} color='white' />
      </button>
    ),
  };
  return (
    <>
      <div className='fixed top-0 left-0 w-full pt-2 z-10 bg-base-100 p-4'>
        <div className='flex items-center justify-between'>
          <button onClick={goBack} className='flex items-center gap-2'>
            <IoIosArrowBack size={20} />
            <span className='font-bold text-lg'>Back</span>
          </button>
          <button onClick={() => navigate("/post")} className='btn'>
            Edit
          </button>
        </div>
      </div>

      <div className='pt-24 pb-12 px-4 flex flex-col gap-8'>
        <Slide {...buttons}>
          <img
            src='default.jpg'
            alt='job image'
            className='w-full h-52 object-cover rounded-lg'
          />
          <img
            src='default.jpg'
            alt='job image'
            className='w-full h-52 object-cover rounded-lg'
          />
          <img
            src='default.jpg'
            alt='job image'
            className='w-full h-52 object-cover rounded-lg'
          />
        </Slide>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Carpenter Job</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <div className='p-2 rounded-md bg-base-300'>
              <HiOutlineLocationMarker />
            </div>
            <span>13, Salami Street Mende Maryland</span>
          </div>

          <div className='flex items-center gap-4'>
            <div className='p-2 rounded-md bg-base-300'>
              <HiOutlineClock />
            </div>
            <span>12/12/23 | 12:00 PM</span>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl'>Applicants</h2>
          <div className='flex flex-col gap-6'>
            <ApplicantCard
              name='Noah Ayodele'
              img='Avatar.png'
              distance='4'
              jobDone='200'
              pro={true}
            />
            <ApplicantCard
              name='Inioluwa Abiodun'
              img='Avatar.png'
              distance='1'
              jobDone='30'
            />
          </div>
        </div>
      </div>
    </>
  );
}
