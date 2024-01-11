import { Link } from "react-router-dom";
import { Header, InboxItem, Input, MobileHeader } from "../../component";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineStarOutline } from "react-icons/md";

export default function InboxPage() {
  return (
    <>
      <MobileHeader />
      <div className='pt-24 px-4 pb-12 flex flex-col gap-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Inbox</h1>

        <Input
          hasIcon={true}
          child={<RiSearchLine size={24} color='#00C614' />}
          type='text'
          placeholder='Search for an artisian'
        />

        <div className='flex flex-col gap-4'>
          <InboxItem name='Noah Ayodele' time='10' link='/inbox-details' />
          <InboxItem name='Noah Ayodele' time='10' link='/inbox-details' />
          <InboxItem name='Noah Ayodele' time='10' link='/inbox-details' />
        </div>
      </div>
    </>
  );
}
