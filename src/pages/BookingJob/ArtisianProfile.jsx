import { Link } from "react-router-dom";
import { Header, Modal, ReviewsComponent } from "../../component";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useState } from "react";

export default function ArtisianProfile() {
  const [image, setImage] = useState(false);
  const [report, setReport] = useState(false);

  const name = "Inioluwa Abiodun";
  const img = "Avatar.png";
  const duration = "2022";
  const jobs = "50";
  const rating = "25";

  const toggleImage = () => {
    setImage(!image);
  };
  const toggleReport = () => {
    setReport(!report);
  };

  return (
    <>
      <Modal title='Images' state={image} toggle={toggleImage}>
        <img
          src='default.jpg'
          alt='image'
          className='w-full h-56 object-cover rounded-lg'
        />
      </Modal>
      <Modal title='Report Issues' state={report} toggle={toggleReport}>
        <textarea
          name='description'
          id=''
          cols='30'
          rows='5'
          placeholder='type something'
          className='bg-base-300 rounded-lg p-4 w-full focus:outline-secondary'
        ></textarea>
        <button className='btn btn-primary btn-block'>Post</button>
      </Modal>
      <Header title='Back' />
      <div className='pt-24 pb-12 px-4 flex flex-col gap-12'>
        <div className='flex flex-col gap-2 items-center'>
          <img
            src={img}
            alt='avatar'
            className='w-24 h-24 object-cover rounded-full'
          />
          <h1 className='font-bold text-xl'>{name}</h1>
          <span className='text-neutral-content'>
            Craftsman since June {duration}
          </span>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col items-center gap-2'>
            <span className='font-bold text-xl'>{jobs}</span>
            <span className='text-neutral-content'>Done</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <span className='font-bold text-xl'>{rating}</span>
            <span className='text-neutral-content'>Ratings</span>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold'>Photos of works</h1>
          <div className='grid grid-cols-4 gap-4'>
            <img
              src='default.jpg'
              alt='defaul'
              className='w-24 object-cover rounded-md'
              onClick={toggleImage}
            />
            <img
              src='default.jpg'
              alt='defaul'
              className='w-24 object-cover rounded-md'
              onClick={toggleImage}
            />
            <img
              src='default.jpg'
              alt='defaul'
              className='w-24 object-cover rounded-md'
              onClick={toggleImage}
            />
            <Link
              to='/images'
              className='bg-base-300 p-1 flex justify-center items-center rounded-md h-full'
            >
              See All
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold'>Customer Reivews</h1>
          <textarea
            name='description'
            id=''
            cols='30'
            rows='5'
            placeholder='Post a review'
            className='bg-base-300 rounded-lg p-4 w-full focus:outline-secondary'
          ></textarea>
          <div className='flex items-center gap-2'>
            <button className='btn'>
              <FiThumbsUp />
            </button>
            <button className='btn'>
              <FiThumbsDown />
            </button>
          </div>
          <button className='btn btn-block btn-primary'>Post</button>
          <div className='flex flex-col gap-4'>
            <ReviewsComponent
              name='Noah Ayodele'
              img='Avatar.png'
              review='He’s a really nice and respectable worker, buh he’s a bit fast tho'
              click={toggleReport}
            />
            <ReviewsComponent
              name='Noah Ayodele'
              img='Avatar.png'
              review='He’s a really nice and respectable worker, buh he’s a bit fast tho'
              click={toggleReport}
            />
          </div>
        </div>
      </div>
    </>
  );
}
