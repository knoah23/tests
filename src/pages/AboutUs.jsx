import { FiArrowUpRight } from "react-icons/fi";
import { Footer, Navbar } from "../component";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className='pt-24 flex flex-col gap-32'>
        <section className='flex flex-col gap-8 max-w-6xl mx-auto px-4 md:px-0'>
          <div className='flex flex-col gap-2'>
            <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
              <img src='/BadgeLogo.svg' alt='logo' className='w-20 h-auto' />
            </div>
            <h1 className='font-bold text-2xl md:text-4xl'>About</h1>
          </div>
          <span className='text-xl font-medium'>
            Welcome to CraftsmenVilla, where craftsmanship meets connection! We
            are not just your regular online platform, we are a community of
            skilled Nigerian craftsmen and customers coming together to create
            something extraordinary.
          </span>
        </section>

        <section className='flex flex-col gap-8 max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div className='flex flex-col gap-4 col-span-1'>
              <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
                Our Story
              </div>
              <span>
                CraftsmenVilla started with a bunch of dreamers who believed in
                the magic of handiwork. We looked around and saw a treasure
                trove of talent in Nigeria waiting to be discovered. That's when
                it dawned on him: why not build a platform that not only
                showcases these amazing skills but also makes it super easy for
                people like you to connect with the perfect craftsmen or
                artisans.
              </span>
            </div>

            <div className='flex flex-col gap-4 col-span-1'>
              <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
                Our Mission
              </div>
              <span>
                At CraftsmenVilla, we are on a mission to make your artisanal
                dreams come true. We want to help local craftsmen reach a wider
                audience and at the same time, we want to make it a breeze for
                you to find that perfect person who can bring your vision to
                life. It is all about fostering economic growth and creating a
                win-win for everyone involved.
              </span>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
                Our Belief
              </div>
              <span>
                CraftsmenVilla is built on a few assumptions that we hold near
                and dear. We believe in the love for craftsmanship, the
                abundance of talented artisans in Nigeria, and the fact that you
                are ready to dive into the digital age. We are all about
                sustainability, growth, and those little moments of joy when you
                find the perfect match for your needs.
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-base-300 py-12 flex flex-col gap-32 text-center px-4 md:px-0'>
            <div className='flex flex-col gap-8 max-w-6xl mx-auto'>
              <h2 className='font-bold text-2xl md:text-3xl italic'>
                WHAT MAKES US <span className='text-secondary'>TICK</span>
              </h2>
              <div className='p-4 md:p-8 bg-base-100 rounded-lg flex flex-col gap-8 md:text-xl text-base font-medium h-auto md:h-60 justify-center'>
                <span>
                  So, what sets CraftsmenVilla apart? It's simple - we are all
                  about being user-friendly, trustworthy, and just a little bit
                  fancy.
                </span>
                <span>
                  From nifty functionalities to prioritizing your privacy and
                  security, we've got it all covered.
                </span>
              </div>
            </div>

            <div className='flex flex-col gap-8 max-w-6xl mx-auto'>
              <h2 className='font-bold text-2xl md:text-3xl italic'>
                HOW WE <span className='text-secondary'>OVERCOME</span>
                CHALLENGES
              </h2>
              <div className='p-4 md:p-8 bg-base-100 rounded-lg flex flex-col gap-8 md:text-xl text-base font-medium h-auto md:h-60 justify-center'>
                <span>
                  CraftsmenVilla acknowledges the fact that every Journey has
                  its bumps and we're not shy about admitting it. From tackling
                  technological literacy to building trust and standing out in
                  the crowd, infrastructure issues, regulatory compliance, and
                  more. We are in this together.
                </span>
                <span>
                  CraftsmenVilla is all about providing a safe, reliable space
                  where craftsmen get what they deserve, and you get top-notch
                  service most especially safeguarding customer payments and
                  ensuring fair compensation for artisans.
                </span>
              </div>
            </div>
          </div>

          <div className='bg-primary text-base-100 py-12 flex flex-col text-center px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex flex-col gap-6 text-base md:text-xl'>
              <div className='flex items-center justify-center md:gap-4 gap-2'>
                <h2 className='font-bold text-3xl'>
                  <span className='text-secondary'>JOIN</span> OUR CRAFTS FAMILY
                </h2>
                <img src='Fist.svg' alt='green fist' className='w-8 h-auto' />
              </div>

              <span>
                CraftsmenVilla is more than just a platform; it's a cozy corner
                where craftsmanship blooms, connections are made, and stories
                unfold. Whether you're a craftsman ready to spread your wings or
                a customer on the hunt for quality service, CraftsmenVilla is
                your go-to destination for artisanal services in Nigeria.
              </span>

              <span>
                Come on in, explore the beauty of craftsmanship, and let's make
                some magic together at CraftsmenVilla!
              </span>

              <div className='flex items-end justify-center gap-4 md:ml-24 ml-0'>
                <button className='btn md:btn-wide btn-block'>
                  Get Started
                </button>
                <img
                  src='PointingHand.svg'
                  alt='green pointing hand'
                  className='w-16 h-auto hidden md:block'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center py-0 md:py-12'>
          <a
            href='/'
            className='text-4xl text-center text-secondary font-semibold underline flex items-center gap-4'
          >
            CONTACT US <FiArrowUpRight />
          </a>
        </section>

        <Footer />
      </div>
    </>
  );
}
