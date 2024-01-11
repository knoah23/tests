import { RiSearchLine } from "react-icons/ri";
import { HistoryItem, Input, MobileHeader } from "../../component";

export default function HistoryPage() {
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
      <MobileHeader />

      <div className='pt-24 pb-12 px-4 flex flex-col gap-8'>
        <h1 className='text-2xl font-bold'>History</h1>
        <Input
          hasIcon={true}
          child={<RiSearchLine size={24} color='#00C614' />}
          type='text'
          placeholder='Search for a service'
        />
        <div className='flex flex-col gap-4'>
          {histories.map((history) => (
            <HistoryItem
              link='/history-details'
              id={history.id}
              title={history.title}
              address={history.address}
              amount={history.amount}
            />
          ))}
        </div>
      </div>
    </>
  );
}
