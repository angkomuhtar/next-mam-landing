import {
  OffersCompas,
  OffersServer,
  OffersShip,
  OffersTruck,
  OffersHelm,
  DumpTruck,
} from "@/../public/assets/icon";
import React from "react";

const OffersCard = ({
  icon,
  title,
  desc,
  ...props
}: {
  icon: string;
  title: string;
  desc: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const iconS = () => {
    switch (icon) {
      case "eksplor":
        return <OffersHelm className='w-10' />;
      case "ship":
        return <OffersShip className='w-10' />;
      case "server":
        return <OffersServer className='w-10' />;
      case "compas":
        return <OffersCompas className='w-10' />;
      case "truck":
        return <OffersTruck className='w-10' />;
      case "dump":
        return <DumpTruck className='w-10' />;
      default:
        return <OffersHelm className='w-10' />;
    }
  };

  return (
    <div
      className='relative bg-white p-4 px shadow-lg rounded-sm flex space-x-6'
      {...props}>
      <div className='bg-red-700 p-2 text-white rounded-xs self-start'>
        {iconS()}
      </div>
      <div>
        <h4 className='font-bold text-lg'>{title}</h4>
        <p className='text-sm'>{desc}</p>
      </div>
    </div>
  );
};

export default OffersCard;

{
  /* <div class="grid grid-cols-[repeat(auto-fit,_16.666666%)] m-auto p-24 justify-center bg-slate-500">
        <div class="w-full p-8 col-span-2 justify-center justify-self-center mx-auto bg-slate-900 text-white text-center text-lg">
          2 cols, should be centered
        </div>
      </div> */
}
