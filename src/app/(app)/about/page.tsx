import { ArrowRight, Link } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us - PT Mitra Abadi Mahakam",
  description:
    "Mitra Tepat untuk Solusi Pertambangan Anda. Kami menyediakan layanan penambangan komprehensif dengan tim berpengalaman dan peralatan modern.",
};

const ContactUs = () => {
  return (
    <div>
      <section className='bg-[url(/assets/images/bg-truck.png)] bg-no-repeat bg-cover '>
        <div className='container mx-auto'>
          <div className='text-center'>
            <div className='h-16'></div>
            <div className='relative py-10 md:py-24'>
              <h1 className='mt-4 text-2xl font-semibold tracking-tight text-balance text-white sm:text-5xl capitalize'>
                tentang kami
              </h1>
              <p className='mt-1 text-xs text-white'>
                Temukan berbagai informasi tentang bagaimana kami memberikan
                solusi terbaik bagi kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
