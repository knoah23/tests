import { Footer, Navbar } from "../component";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const testimonies = [
    {
      id: 1,
      name: "John Doe",
      word: "This is the testimony of this person. This is the testimony of this person. This is the testimony of this person. This is the testimony of this person.",
    },
    {
      id: 2,
      name: "Doyin Adebayo",
      word: "This is the testimony of this person. This is the testimony of this person. This is the testimony of this person. This is the testimony of this person.",
    },
    {
      id: 3,
      name: "Moshood Jimoh-Kuku",
      word: "This is the testimony of this person. This is the testimony of this person. This is the testimony of this person. This is the testimony of this person.",
    },
    {
      id: 4,
      name: "Noah Ayodele",
      word: "This is the testimony of this person. This is the testimony of this person. This is the testimony of this person. This is the testimony of this person.",
    },
    {
      id: 5,
      name: "David Omokanye",
      word: "This is the testimony of this person. This is the testimony of this person. This is the testimony of this person. This is the testimony of this person.",
    },
  ];

  const questions = [
    {
      id: 1,
      title: "This is the question. This is the question.",
      answer: "This is the answer the the question above.",
    },
    {
      id: 2,
      title: "This is the question. This is the question.",
      answer: "This is the answer the the question above.",
    },
    {
      id: 3,
      title: "This is the question. This is the question.",
      answer: "This is the answer the the question above.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-32 pt-32'>
        {/* HERO SECTION */}
        <section className='flex flex-col items-center gap-8 px-4 md:px-0'>
          <div className='flex flex-col gap-4 items-center max-w-xl text-center'>
            <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
              <img src='/BadgeLogo.svg' alt='logo' className='w-20 h-auto' />
            </div>
            <h1 className='font-bold text-3xl md:text-5xl'>
              Empowering Artisans, Connecting Skills
            </h1>
            <span className='text-neutral-content'>
              Your Trusted Hub For Skilled Artisans with Opportunities!
            </span>
            <Link
              to='/splash'
              className='btn btn-primary btn-block md btn-block:md:btn-wide'
            >
              Get Started
            </Link>
          </div>
          {/* IMAGE GRID */}
          <div className='bg-base-100 md:bg-grid py-10 grid grid-cols-1 md:grid-cols-4 w-full max-w-6xl mx-auto gap-12 md:gap-4 items-center'>
            <div className='w-full flex items-center justify-center'>
              <img
                src='grid1.png'
                alt='artisian'
                className='md:h-96 h-64 rounded object-cover md:w-full w-52 rotate-[15deg] md:rotate-0'
              />
            </div>

            <div className='w-full mt-0 md:mt-12 flex items-center justify-center'>
              <img
                src='grid2.png'
                alt='artisian'
                className='md:h-96 h-64 rounded object-cover md:w-full w-52 -rotate-[15deg] md:rotate-0'
              />
            </div>

            <div className='w-full flex items-center justify-center'>
              <img
                src='grid3.png'
                alt='artisian'
                className='md:h-96 h-64 rounded object-cover md:w-full w-52 rotate-[15deg] md:rotate-0'
              />
            </div>

            <div className='w-full md:mt-12 mt-0 flex items-center justify-center'>
              <img
                src='grid4.png'
                alt='artisian'
                className='md:h-96 h-64 rounded object-cover md:w-full w-52 -rotate-[15deg] md:rotate-0'
              />
            </div>
          </div>
        </section>

        {/* FOR ARTISAN & USERS */}
        <section className='flex flex-col gap-16 max-w-6xl mx-auto px-4 md:px-0'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
            <img
              src='/HandShake.jpg'
              alt='image of hand shaking'
              className='object-cover rounded-lg w-full'
            />
            <div className='flex flex-col gap-4'>
              <h2 className='font-semibold text-lg'>
                As a <span className='text-secondary'>USER</span>
              </h2>
              <span className='text-neutral-content'>
                Offering users a convenient and accessible platform to easily
                find and engage skilled craftsmen for their specific needs.
              </span>
              <button className='btn btn-primary btn-block md:btn-wide'>
                Get Started
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
            <div className='flex flex-col gap-4 order-last md:order-first'>
              <h2 className='font-semibold text-lg'>
                As an <span className='text-secondary'>ARTISAN</span>
              </h2>
              <span className='text-neutral-content'>
                As a skilled craftman, we provide a platform that will make it
                easy for you to find potential customers in need of your
                service.
              </span>
              <button className='btn btn-primary btn-block md:btn-wide'>
                Get Started
              </button>
            </div>
            <img
              src='/Carpenter.png'
              alt='image of hand shaking'
              className='object-cover rounded w-full'
            />
          </div>
        </section>

        <section className='flex flex-col gap-8 items-center px-4 md:px-0'>
          <div className='flex flex-col gap-4 items-center max-w-xl mx-auto'>
            <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
              <img src='/BadgeLogo.svg' alt='logo' className='w-20 h-auto' />
            </div>
            <h1 className='font-bold text-center md:text-5xl text-2xl'>
              Our Services
            </h1>
            <span className='text-neutral-content'>SubHeader Text</span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-6 w-full max-w-6xl mx-auto gap-4 items-center'>
            <div className='bg-primary rounded overflow-hidden text-white'>
              <img
                src='ServiceImg1.png'
                alt='carpenter working'
                className='object-cover h-52 w-full'
              />
              <div className='p-2'>
                <span>Carpenter</span>
              </div>
            </div>

            <div className='bg-primary rounded overflow-hidden text-white'>
              <img
                src='ServiceImg2.png'
                alt='carpenter working'
                className='object-cover h-52 w-full'
              />
              <div className='p-2'>
                <span>Electrician</span>
              </div>
            </div>

            <div className='bg-primary rounded overflow-hidden text-white'>
              <img
                src='ServiceImg3.png'
                alt='carpenter working'
                className='object-cover h-52 w-full'
              />
              <div className='p-2'>
                <span>Plumber</span>
              </div>
            </div>

            <div className='bg-primary rounded overflow-hidden text-white'>
              <img
                src='ServiceImg4.png'
                alt='carpenter working'
                className='object-cover h-52 w-full'
              />
              <div className='p-2'>
                <span>HVAC Technician</span>
              </div>
            </div>

            <div className='bg-primary rounded overflow-hidden text-white'>
              <img
                src='ServiceImg5.png'
                alt='carpenter working'
                className='object-cover h-52 w-full'
              />
              <div className='p-2'>
                <span>Water Purification</span>
              </div>
            </div>

            <div className='bg-primary rounded overflow-hidden text-white'>
              <img
                src='ServiceImg6.png'
                alt='carpenter working'
                className='object-cover h-52 w-full'
              />
              <div className='p-2'>
                <span>Welder</span>
              </div>
            </div>
          </div>

          <button className='btn btn-primary btn-block md:btn-wide'>
            See Other Services
          </button>
        </section>

        <section className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4 items-center max-w-xl mx-auto'>
            <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
              <img src='/BadgeLogo.svg' alt='logo' className='w-20 h-auto' />
            </div>
            <h1 className='font-bold text-center md:text-5xl text-2xl'>
              Testimonials
            </h1>
            <span className='text-neutral-content'>
              Hear what people have to say about us
            </span>
          </div>

          <div className='px-0 md:px-20'>
            <div className='hidden md:block'>
              <Slide slidesToShow={3}>
                {testimonies.map((testimony) => {
                  return (
                    <div
                      key={testimony.id}
                      className='bg-primary p-4 rounded flex flex-col gap-4 text-white mx-4'
                    >
                      <h3>{testimony.name}</h3>
                      <span>{testimony.word}</span>
                    </div>
                  );
                })}
              </Slide>
            </div>

            <div className='block md:hidden'>
              <Slide slidesToShow={1}>
                {testimonies.map((testimony) => {
                  return (
                    <div
                      key={testimony.id}
                      className='bg-primary p-4 rounded flex flex-col gap-4 text-white mx-4'
                    >
                      <h3>{testimony.name}</h3>
                      <span>{testimony.word}</span>
                    </div>
                  );
                })}
              </Slide>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4 items-center max-w-xl mx-auto'>
            <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
              <img src='/BadgeLogo.svg' alt='logo' className='w-20 h-auto' />
            </div>
            <h1 className='font-bold text-center md:text-5xl text-2xl'>FAQs</h1>
            <span className='text-neutral-content'>
              Frequently Asked Questions
            </span>
          </div>

          <div className='px-4 md:px-20'>
            <Accordion allowZeroExpanded className='w-full mb-20 text-left'>
              {questions.map((question) => {
                return (
                  <AccordionItem className='mb-10' key={question.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='p-4 flex justify-between w-full my-4 font-bold rounded-md border border-neutral-content'>
                        {question.title}
                        <BsPlus size={24} />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className='text-left text-xl pt-4 px-2'>
                      {question.answer}
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </section>

        <div>
          <section className='flex flex-col items-center gap-8 py-10 px-4 md:px-0 bg-[#EBFAEC] text-primary'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center place-items-center max-w-7xl'>
              <div className='flex flex-col gap-4 items-center md:items-start'>
                <img
                  src='parachute.svg'
                  alt='parachute'
                  className='w-24 h-auto'
                />
                <div className='badge badge-secondary badge-outline'>
                  COMING SOON
                </div>
                <h2 className='md:text-4xl text-3xl font-bold text-center md:text-left'>
                  Mobile Application Under Development
                </h2>
              </div>
              <div className='col-span-1'>
                <img src='mockup.png' alt='craftsmen app' />
              </div>
            </div>
          </section>

          <section className='flex flex-col items-center py-12 gap-8 bg-primary text-white px-4 md:px-0'>
            <div className='max-w-7xl mx-auto space-y-4'>
              <div className='flex items-start md:items-center gap-4 max-w-xl'>
                <img src='Star.svg' alt='green star' className='w-24 h-auto' />
                <span className='text-2xl md:text-4xl font-bold text-center'>
                  WE ARE HERE TO GIVE YOU 100% SATISFACTION!
                </span>
                <img src='Star.svg' alt='green star' className='w-24 h-auto' />
              </div>

              <div className='flex items-center justify-center p-8 gap-8 max-w-xl mx-auto'>
                <img
                  src='Rocket1.svg'
                  alt='green star'
                  className='md:w-24 md:h-24 w-12 h-12 object-contain'
                />
                <span className='text-white text-center'>
                  Get on board with us
                </span>
                <img
                  src='Rocket2.svg'
                  alt='green star'
                  className='md:w-24 md:h-24 w-12 h-12 object-contain'
                />
              </div>

              <div className='flex justify-center'>
                <button className='btn btn-block md:btn-wide'>
                  Get Started
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
