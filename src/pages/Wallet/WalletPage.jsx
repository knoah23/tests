import { useState } from "react";
import { Input, MobileHeader, Modal } from "../../component";

export default function WalletPage() {
  const [fundModal, setFundModal] = useState(false);

  const toggleModal = () => {
    setFundModal(!fundModal);
  };
  return (
    <>
      <Modal title='Input fund amount' state={fundModal} toggle={toggleModal}>
        <div className='flex flex-col gap-4'>
          <Input type='text' placeholder='Amount' />
          <button className='btn btn-block btn-primary'>Next</button>
          {/* Leads to paystack or whoever's payment modal */}
        </div>
      </Modal>
      <MobileHeader />
      <div className='pt-24 pb-12 px-4 flex flex-col gap-8'>
        <h1 className='text-2xl font-bold'>My Wallet</h1>

        <div className='bg-accent rounded-lg p-4 w-full h-32 flex flex-col justify-between'>
          <span>Balance</span>
          <span className='text-3xl font-bold'>10,000 NGN</span>
        </div>
        <button onClick={toggleModal} className='btn btn-primary btn-block'>
          Fund Wallet
        </button>
      </div>
    </>
  );
}
