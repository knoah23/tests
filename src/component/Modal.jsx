import { GrFormClose } from "react-icons/gr";

export default function Modal({ state, toggle, title, children }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {state && (
        <div className='w-full h-screen z-20 fixed bg-[#0000007e]'>
          <div onClick={() => toggle()} className='h-full relative'>
            <div
              onClick={stopPropagation}
              className='absolute bottom-0 w-full z-[60] bg-base-100 space-y-6 p-4 rounded-t-lg'
            >
              <h1 className='font-bold text-xl'>{title}</h1>

              {children}
              <button className='btn btn-block' onClick={() => toggle()}>
                <GrFormClose size={25} /> Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
