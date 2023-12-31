import { RiSearchLine } from "react-icons/ri";
import { Header, Input } from "../../component";
import { IoMdCut } from "react-icons/io";
import { PiBroomBold } from "react-icons/pi";
import { MdPlumbing } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AllServices() {
  const services = [
    {
      id: 1,
      name: "Barber",
      icon: <IoMdCut size={24} className='text-secondary' />,
      link: "/post",
    },
    {
      id: 2,
      name: "Cleaner",
      icon: <PiBroomBold size={24} className='text-secondary' />,
      link: "/post",
    },
    {
      id: 3,
      name: "Plummber",
      icon: <MdPlumbing size={24} className='text-secondary' />,
      link: "/post",
    },
  ];
  return (
    <>
      <Header title='Back' />
      <div className='pt-24 flex flex-col gap-8 px-4'>
        <Input
          hasIcon={true}
          child={<RiSearchLine size={24} color='#00C614' />}
          type='text'
          placeholder='Search for a service'
        />

        <div className='grid grid-cols-2 gap-4'>
          {services.map((service) => (
            <Link to={service.link} key={service.id} className='btn '>
              {service.icon}
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
