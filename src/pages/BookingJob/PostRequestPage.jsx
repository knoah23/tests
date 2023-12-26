import { MdDeleteOutline, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Input } from "../../component";
import Header from "../../component/Header";
import Select from "react-select";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";

export default function PostRequestPage() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    event.preventDefault();
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files).map((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImages((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
        return null;
      });
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const options = [
    { value: "carpenter", label: "Carpenter" },
    { value: "mechanic", label: "Mechanic" },
    { value: "barber", label: "Barber" },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Header title='Post a Job Request' />
      <div className='pt-24 space-y-24 pb-10 px-4'>
        <form className='space-y-4'>
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                padding: ".5rem",
                border: "none",
                background: "#f4f7f4",
                borderRadius: "0.5rem",
                focus,
              }),
            }}
            options={options}
            placeholder='Search for services'
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#00C614",
                primary: "#00C614",
              },
            })}
          />
          <Input
            type='text'
            hasIcon={true}
            child={<MdLocationOn size={24} color='#00C614' />}
            placeholder='Input your location'
          />
          <button className='btn btn-ghost text-secondary'>
            <TiLocationArrowOutline size={20} /> Use my current location
          </button>
          <Input type='datetime-local' placeholder='Input your location' />
          <div className='form-control'>
            <label className='flex items-center gap-2'>
              <input type='checkbox' className='checkbox checkbox-secondary' />
              <span className='label-text'>Remember me</span>
            </label>
          </div>
          <textarea
            name='description'
            id=''
            cols='30'
            rows='5'
            placeholder='Job description'
            className='bg-base-300 rounded-lg p-4 w-full focus:outline-secondary'
          ></textarea>

          <div className='space-y-12'>
            <div className='flex flex-col gap-4'>
              <h1 className='font-bold text-xl'>Add photos (optional)</h1>
              <span className='text-neutral-content'>
                Help craftsmen understand what you want better
              </span>
            </div>

            <div className='rounded-lg border p-8 border-dashed border-black flex justify-center items-center'>
              <div className='z-10'>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                />
              </div>
              <div className='absolute'>
                <AiOutlinePlus size={24} />
              </div>
            </div>
            {selectedImages.length > 0 && (
              <div className='grid grid-cols-3 gap-4'>
                {selectedImages.map((image, index) => (
                  <div
                    key={index}
                    className='relative w-full h-24 overflow-hidden rounded-lg'
                  >
                    <img
                      src={image}
                      alt={`Selected ${index + 1}`}
                      className='w-full h-full object-cover'
                    />
                    <button
                      className='btn btn-sm absolute top-2 right-2'
                      onClick={() => handleRemoveImage(index)}
                    >
                      <MdDeleteOutline className='text-error' />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>

        <button
          onClick={() => navigate("/fee")}
          className='btn btn-primary btn-block'
        >
          Book a Request
        </button>
      </div>
    </>
  );
}
