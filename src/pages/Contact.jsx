import { Footer, Input, Navbar } from "../component";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className='pt-24 flex flex-col gap-32 pb-16 max-w-6xl mx-auto'>
        <section className='flex flex-col md:gap-8 gap-4 px-4 md:px-0'>
          <div className='flex flex-col gap-2'>
            <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
              <img src='/BadgeLogo.svg' alt='logo' className='w-20 h-auto' />
            </div>
            <h1 className='font-bold text-3xl md:text-4xl'>Contact Us</h1>
          </div>
          <span className='text-xl'>
            Want to talk to us about anything, feel free to reach out to us.
          </span>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-0'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <h2 className='font-bold text-2xl'>Mail</h2>
              <a href='/' className='text-secondary underline'>
                example@gmail.com
              </a>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='font-bold text-2xl'>Phone Number</h2>
              <a href='/' className='text-secondary underline'>
                081234567890
              </a>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Input type='text' placeholder='Full Name' />
            <Input type='text' placeholder='Email Address' />
            <textarea
              name='description'
              id=''
              cols='30'
              rows='5'
              placeholder='Message'
              className='bg-base-300 rounded-lg p-4 w-full focus:outline-secondary'
            ></textarea>
            <button className='btn btn-primary btn-block'>Submit</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
