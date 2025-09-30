import React from "react";

const SectionTitle = ({
  text,
  ...props
}: { text: string } & React.ComponentProps<"div">) => {
  return (
    <div className='' {...props}>
      <h2
        className='text-3xl font-Inter font-bold capitalize'
        data-aos-duration='1000'
        data-aos='fade-left'
        data-aos-easing='ease-in-out'
        data-aos-mirror='true'>
        {text}
      </h2>
      <div
        className='h-1 w-24 bg-red-700 mt-1'
        data-aos-duration='1000'
        data-aos='fade-down'
        data-aos-easing='ease-in-out'
        data-aos-mirror='true'
      />
    </div>
  );
};

export default SectionTitle;
