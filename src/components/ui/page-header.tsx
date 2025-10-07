import React from "react";

const PageHeader = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <section className='bg-[url(/assets/images/bg-truck.png)] bg-no-repeat bg-cover '>
      <div className='container mx-auto'>
        <div className='text-center'>
          <div className='h-16'></div>
          <div className='relative py-10 md:py-24'>
            <h1 className='mt-4 text-2xl font-semibold tracking-tight text-balance text-white sm:text-5xl capitalize'>
              {title}
            </h1>
            <p className='mt-3 text-sm font-light text-white'>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
