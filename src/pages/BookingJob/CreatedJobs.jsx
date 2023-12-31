import { RiSearchLine } from "react-icons/ri";
import { Header, Input, JobComponent } from "../../component";

export default function CreatedJobs() {
  return (
    <>
      <Header title='Back' />
      <div className='pt-24 pb-10 flex flex-col gap-8 px-4'>
        <h1 className='text-2xl font-bold'>Your Created Jobs</h1>
        <Input
          hasIcon={true}
          child={<RiSearchLine size={24} color='#00C614' />}
          type='text'
          placeholder='Search for a service'
        />

        <div className='flex flex-col gap-4 max-w-6xl mx-auto'>
          <JobComponent
            title='Carpenter Job'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            link='/job-detail'
          />
          <JobComponent
            title='Carpenter Job'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            link='/job-detail'
          />
        </div>
      </div>
    </>
  );
}
