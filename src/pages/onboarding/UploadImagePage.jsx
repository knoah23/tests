import { useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../component";
import Header from "../../component/Header";
import { RiImageLine } from "react-icons/ri";

export default function UploadImagePage() {
  const [uploadModal, setUploadModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const toggleModal = () => {
    setUploadModal(!uploadModal);
  };
  const navigate = useNavigate();
  return (
    <>
      <Modal title='Upload Image' state={uploadModal} toggle={toggleModal}>
        <ul className='flex flex-col gap-4'>
          <li>
            <button className='btn gap-4 justify-start btn-block'>
              <MdOutlineCameraAlt size={24} />
              Snap with camera
            </button>
          </li>
          <li>
            <label className='btn justify-start btn-block'>
              <div className='flex gap-4 items-center'>
                <RiImageLine size={24} />
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='absolute'
                />
                <span className=' z-20'>Choose from gallery</span>
              </div>
            </label>
          </li>
        </ul>
      </Modal>
      <Header title='Back' />
      <div className='pt-24 pb-10 flex flex-col justify-between px-4 space-y-24 max-w-4xl mx-auto'>
        <div>
          <h1 className='font-bold mb-4 text-xl'>Upload an image</h1>
          <span className='text-neutral-content'>
            Add an image of yourself for better identification both by us and
            the artisian
          </span>
        </div>
        <div className='space-y-4 flex items-center flex-col'>
          {selectedImage ? (
            <>
              <img
                src={selectedImage}
                alt='Selected'
                className='w-32 h-32 mb-4 rounded-full object-cover '
              />
              <button
                className='btn btn-ghost text-secondary'
                onClick={handleRemoveImage}
              >
                Remove Image
              </button>
            </>
          ) : (
            <>
              <img
                src='Avatar.png'
                alt='User avatar'
                className='w-32 h-32 mb-4 rounded-full object-cover '
              />
              <button
                onClick={toggleModal}
                className='btn btn-ghost text-secondary'
              >
                Upload Image
              </button>
            </>
          )}
        </div>
        <div className='flex flex-col gap-4 '>
          <button
            onClick={() => navigate("/welcome")}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Next
          </button>
          <button
            onClick={() => navigate("/welcome")}
            type='submit'
            className='btn  btn-block'
          >
            Skip
          </button>
        </div>
      </div>
    </>
  );
}
