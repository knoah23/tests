import { MobileHeader } from "../../component";

export default function WalletPage() {
  return (
    <>
      <MobileHeader />
      <div className='pt-24 pb-12 px-4 flex flex-col gap-8'>
        <h1 className='text-2xl font-bold'>My Wallet</h1>

        <div className='bg-accent rounded-lg p-4 w-full h-32 flex flex-col justify-between'>
          <span>Balance</span>
          <span className='text-3xl font-bold'>10,000 NGN</span>
        </div>
        <button className='btn btn-primary btn-block'>Fund Wallet</button>
      </div>
    </>
  );
}
