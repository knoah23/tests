import { Footer, Navbar } from "../component";

export default function OurServices() {
  const services = [
    {
      id: 1,
      img: "ServiceImg1.png",
      title: "Carpenter",
    },
    {
      id: 2,
      img: "ServiceImg2.png",
      title: "Electrician",
    },
    {
      id: 3,
      img: "ServiceImg3.png",
      title: "Plumber",
    },
    {
      id: 4,
      img: "ServiceImg4.png",
      title: "HVAC Technician",
    },
    {
      id: 5,
      img: "ServiceImg5.png",
      title: "Water Purification",
    },
    {
      id: 6,
      img: "ServiceImg6.png",
      title: "Welder",
    },
    {
      id: 7,
      img: "ServiceImg7.png",
      title: "Pest Control",
    },
    {
      id: 8,
      img: "ServiceImg8.png",
      title: "CCTV Installation",
    },
    {
      id: 9,
      img: "ServiceImg9.png",
      title: "Hair Stylist",
    },
    {
      id: 10,
      img: "ServiceImg10.png",
      title: "Barber",
    },
    {
      id: 11,
      img: "ServiceImg11.png",
      title: "Generator Repairer",
    },

    {
      id: 12,
      img: "ServiceImg12.png",
      title: "Makeup Artist",
    },
    {
      id: 13,
      img: "ServiceImg13.png",
      title: "Lesson Teacher",
    },
    {
      id: 14,
      img: "ServiceImg14.png",
      title: "Lashes Technician",
    },

    {
      id: 15,
      img: "ServiceImg15.png",
      title: "Nails Technician",
    },
    {
      id: 16,
      img: "ServiceImg16.png",
      title: "Solar Panel Technician",
    },
    {
      id: 17,
      img: "ServiceImg17.png",
      title: "Mason",
    },
    {
      id: 18,
      img: "ServiceImg18.png",
      title: "Interior Decorator",
    },

    {
      id: 19,
      img: "ServiceImg19.png",
      title: "Tiles Setter",
    },
    {
      id: 20,
      img: "ServiceImg20.png",
      title: "Locksmith",
    },
    {
      id: 21,
      img: "ServiceImg21.png",
      title: "Glassworking",
    },
    {
      id: 22,
      img: "ServiceImg22.png",
      title: "Auto Mechanic",
    },
    {
      id: 23,
      img: "ServiceImg23.png",
      title: "Event Decorator",
    },

    {
      id: 24,
      img: "ServiceImg24.png",
      title: "Caterer",
    },
  ];
  return (
    <>
      <Navbar />
      <div className='flex flex-col md:gap-32 gap-16 pt-24 '>
        <section>
          <div className='max-w-6xl mx-auto px-4 md:px-0'>
            <div className='flex flex-col gap-2'>
              <div className='badge badge-secondary badge-outline bg-[#EBFAEC]'>
                <img src='/BadgeLogo.svg' alt='logo' className='w-20 h-auto' />
              </div>
              <h1 className='font-bold text-3xl md:text-4xl'>Our Services</h1>
            </div>
            <span className='text-xl'>
              Our artisanal services to help with your needs
            </span>
          </div>
        </section>

        <section>
          <div className='px-4 md:px-0 grid grid-cols-1 md:grid-cols-6 w-full max-w-6xl mx-auto gap-4 items-center'>
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className='bg-primary rounded overflow-hidden text-white'
                >
                  <img
                    src={service.img}
                    alt='carpenter working'
                    className='object-cover h-52 w-full'
                  />
                  <div className='p-2'>
                    <span>{service.title}</span>
                  </div>
                </div>
              );
            })}
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
              <button className='btn btn-block md:btn-wide'>Get Started</button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
