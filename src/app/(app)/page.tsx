"use client";
import HeaderImage from "@/components/home/header-image";
import React from "react";
import Aos from "aos";
import OffersCard from "@/components/offers-card";
import SectionTitle from "@/components/section-title";

export default function Home() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className=''>
      <HeaderImage />

      <section className='bg-muted'>
        <div className='px-4 sm:px-8 container mx-auto py-32 grid md:grid-cols-3 gap-x-12'>
          <div className='hidden md:block bg-[url(/assets/images/bg-about.png)] bg-cover bg-no-repeat relative w-[85%] aspect-[3/4] mr-16'>
            <div className='bg-red-700 py-3 px-5 absolute -bottom-4 -right-10'>
              <h2 className='font-semibold text-xs text-white uppercase '>
                10+ Years OF experiences
              </h2>
            </div>
          </div>
          <div className='py-4 grid grid-cols-2 gap-x-6 gap-y-2 md:col-span-2 content-center'>
            <div className='col-span-2'>
              <SectionTitle text='PT Mitra Abadi Mahakam' />
              <p className='mt-6 font-light text-sm leading-relaxed'>
                Mitra Abadi Mahakam adalah Perseroan Terbatas (PT) yang berdiri
                sejak 2010 dan memulai kegiatan usaha sejak 2011. Kegiatan usaha
                yang pertama yaitu penyewaan alat berat di Usaha Bongkar Muat
                (Transhipment) Batu Bara, lalu Pada tahun 2014 melebarkan sayap
                membuka usaha baru sebagai Kontraktor Pertambangan Batu Bara.
                Kami berkomitmen untuk menyediakan rangkaian lengkap layanan
                penambangan untuk batubara dan mineral. Layanan ini disediakan
                oleh orang Indonesia yang sangat berkualitas dan berpengalaman.
                Dan kami juga mendukung di perusahaan Pabrikasi, Penyewaan Alat
                Berat dan Kegiatan Bongkar Muat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='md:py-32 py-16'>
        <div className='px-4 sm:px-8 container mx-auto'>
          <div className='grid place-content-center'>
            <SectionTitle text='Layanan Kami' />
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-24 gap-8 justify-center'>
            <OffersCard
              data-aos='fade-right'
              data-aos-duration='500'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              title='Eksplorasi'
              icon='compas'
              desc='Layanan eksplorasi & survey tambang yang komprehensif dan inovatif'
            />
            <OffersCard
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              title='Layanan & Kontrak Manajemen Tambang'
              icon='server'
              desc='Layanan & kontrak manajemen tambang yang profesional dan terpercaya'
            />
            <OffersCard
              data-aos='fade-left'
              data-aos-duration='700'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              title='Kontraktor Pertambangan'
              icon='helm'
              desc='Layanan kontraktor pertambangan yang andal dan efisien'
            />
            <OffersCard
              data-aos='fade-left'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              title='Kontraktor Umum & Pemasok'
              icon='truck'
              desc='Penyedia layanan kontraktor umum & pemasok yang handal dan berkualitas'
            />
            <OffersCard
              data-aos='fade-down'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              title='Kegiatan Bongkar Muat'
              icon='ship'
              desc='Layanan kegiatan bongkar muat yang cepat dan aman'
            />
            <OffersCard
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              title='Penyewaan Alat Berat'
              icon='dump'
              desc='Layanan penyewaan alat berat yang handal dan terjangkau'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
