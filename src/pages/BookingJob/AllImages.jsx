import { useState } from "react";
import { Header, Modal } from "../../component";

export default function AllImages() {
  const [gallery, setGallery] = useState(false);
  const name = "Noah";

  const toggleGallery = () => {
    setGallery(!gallery);
  };
  return (
    <>
      <Header title='Back' />
      <Modal title='Images' state={gallery} toggle={toggleGallery}>
        <img
          src='default.jpg'
          alt='image'
          className='w-full h-56 object-cover rounded-lg'
        />
      </Modal>
      <div className='px-4 pt-24 pb-12 flex flex-col gap-8'>
        <h1 className='font-bold text-2xl'>{name}'s works</h1>
        <div className='grid grid-cols-3 gap-2 overflow-scroll'>
          <img
            src='default.jpg'
            alt='work'
            className='object-cover rounded-md'
            onClick={toggleGallery}
          />
          <img
            src='default.jpg'
            alt='work'
            className='object-cover rounded-md'
            onClick={toggleGallery}
          />
          <img
            src='default.jpg'
            alt='work'
            className='object-cover rounded-md'
            onClick={toggleGallery}
          />
          <img
            src='default.jpg'
            alt='work'
            className='object-cover rounded-md'
            onClick={toggleGallery}
          />
          <img
            src='default.jpg'
            alt='work'
            className='object-cover rounded-md'
            onClick={toggleGallery}
          />
          <img
            src='default.jpg'
            alt='work'
            className='object-cover rounded-md'
            onClick={toggleGallery}
          />
        </div>
      </div>
    </>
  );
}
