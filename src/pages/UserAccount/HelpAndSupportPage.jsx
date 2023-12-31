import { useNavigate } from "react-router-dom";
import { Input } from "../../component";
import Header from "../../component/Header";

export default function HelpAndSupportPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='my-24 px-4 space-y-24 max-w-4xl mx-auto'>
        <div className='space-y-16'>
          <div className='space-y-8'>
            <div>
              <h1 className='font-bold mb-4 text-xl'>
                Need assistance or have questions?
              </h1>
              <span className='text-neutral-content'>
                Contact our support team by clicking the 'Get Help' button
                below, and we'll be happy to assist you.
              </span>
            </div>
          </div>
          <button type='submit' className='btn btn-primary btn-block'>
            Get Help
          </button>
        </div>
      </div>
    </>
  );
}
