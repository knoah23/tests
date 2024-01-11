import { IoMdCut } from "react-icons/io";
import { CraftsmenPins, HistoryItem, Loader, MobileHeader } from "../component";
import GoogleMapReact from "google-map-react";
import { PiBroomBold } from "react-icons/pi";
import { GiWoodenChair } from "react-icons/gi";
import { MdPlumbing } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaAngleRight,
  FaHouseUser,
  FaRegClock,
  FaRegStar,
} from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

export default function Home() {
  const defaultProps = {
    center: {
      lat: 6.573396,
      lng: 3.370303,
    },
    zoom: 11,
  };
  const name = "Noah";

  const services = [
    {
      id: 1,
      name: "Barber",
      icon: <IoMdCut size={24} className='text-secondary' />,
    },
    {
      id: 2,
      name: "Cleaner",
      icon: <PiBroomBold size={24} className='text-secondary' />,
    },
    {
      id: 3,
      name: "Plummber",
      icon: <MdPlumbing size={24} className='text-secondary' />,
    },
  ];

  const histories = [
    {
      id: 1,
      title: "Plumber",
      address: "13, Salami Street",
      amount: "3000",
    },
    {
      id: 2,
      title: "Carpenter",
      address: "13, Salami Street",
      amount: "10,000",
    },
    {
      id: 3,
      title: "Barber",
      address: "13, Salami Street",
      amount: "2000",
    },
  ];
  return (
    <>
      <div className='relative'>
        <MobileHeader />
        <div className='h-screen w-full'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "api-key here" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <CraftsmenPins
              lat={6.573724}
              lng={3.370923}
              icons={<GrUserWorker />}
            />
          </GoogleMapReact>
        </div>
        <div className='md:h-[75vh] h-[50vh] overflow-scroll z-10 absolute bottom-0 left-0 w-full md:w-fit md:top-28 md:left-10 md:rounded-lg bg-base-100 rounded-t-lg shadow-lg p-4 flex flex-col gap-12'>
          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-2xl'>Hi, {name}</h1>
            <Link to='/post' className='btn btn-primary btn-block'>
              Post a job request
            </Link>
          </div>

          <div className='space-y-6'>
            <h1 className='font-bold text-xl'>Popular services</h1>
            <div className='grid grid-cols-4 gap-4'>
              {services.map((service) => (
                <div
                  key={service.id}
                  className='flex flex-col gap-2 items-center'
                >
                  <button className='btn btn-square'>{service.icon}</button>
                  {service.name}
                </div>
              ))}
              <Link
                to='/services'
                className='bg-base-300 h-full flex items-center justify-center rounded-lg p-4 font-bold'
              >
                See More
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-xl'>History</h1>
            <div className='menu menu-vertical gap-4 px-0'>
              <li>
                {histories.map((history) => (
                  <HistoryItem
                    link='/history-details'
                    id={history.id}
                    title={history.title}
                    address={history.address}
                    amount={history.amount}
                  />
                ))}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
