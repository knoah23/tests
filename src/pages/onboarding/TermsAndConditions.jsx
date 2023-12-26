import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";

export default function TermsAndConditions() {
  const navigate = useNavigate();
  return (
    <>
      <Header title='Back' />
      <div className='py-24 px-4 space-y-24 h-screen max-w-4xl mx-auto'>
        <div className='space-y-16'>
          <div className='space-y-8'>
            <h1 className='font-bold mb-4 text-xl'>
              CraftsMenVilla Terms of Service
            </h1>
            <div className='overflow-scroll h-80'>
              <p className='text-neutral-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas velit orci, hendrerit eget convallis a, volutpat sit
                amet lorem. Duis at dignissim turpis, luctus ultricies arcu.
                Aliquam placerat tempor eros viverra efficitur. In hac habitasse
                platea dictumst. Phasellus vehicula mauris vitae libero
                sollicitudin, vitae dictum magna pharetra. Nullam lacus dui,
                pulvinar sed tortor in, sollicitudin feugiat felis. Proin
                pharetra orci nunc, placerat sodales dolor posuere a. Quisque
                orci turpis, suscipit eget neque eu, interdum imperdiet ipsum.
                Fusce aliquam metus felis, et ultricies turpis eleifend quis.
                Nunc at justo lectus. Phasellus venenatis neque rhoncus,
                elementum augue vitae, posuere risus. Sed venenatis justo eget
                nibh placerat, vel sodales nibh sodales. Maecenas tincidunt
                neque ullamcorper velit convallis, eget ultrices augue
                imperdiet. Etiam hendrerit a diam nec facilisis. Phasellus ac
                blandit lorem, vel pellentesque metus. Suspendisse non vehicula
                nisl.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/location")}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Agree
          </button>
        </div>
      </div>
    </>
  );
}
