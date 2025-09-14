import { ArrowRight } from "lucide-react";
import React from "react";

const HeaderImage = () => {
  return (
    <section className='bg-[url(/assets/images/bg-truck.png)] h-screen bg-fixed bg-no-repeat bg-cover flex items-center bg-right'>
      <div className='container mx-auto'>
        <h2
          data-aos='fade-up'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-duration='1000'
          className='text-white uppercase'>
          Pt mitra abadi mahakam
        </h2>
        <h2
          data-aos-duration='1000'
          data-aos='fade-left'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          className='text-white capitalize font-extrabold text-4xl mt-3 mb-20 leading-snug'>
          Creating <span className='text-red-700'>Value</span> and <br />
          Winning <span className='text-red-700'>Trust</span>
        </h2>
        <button
          data-aos='fade-right'
          data-aos-mirror='true'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          className='bg-red-700 px-6 py-3 rounded-md text-sm font-medium flex items-center text-white uppercase cursor-pointer'>
          discover More <ArrowRight className='w-6 ml-3' />
        </button>
      </div>
    </section>
  );
};

export default HeaderImage;
