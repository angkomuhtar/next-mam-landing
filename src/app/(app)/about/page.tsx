import PageHeader from "@/components/ui/page-header";
import { ArrowRight, Link } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tentang - PT Mitra Abadi Mahakam",
  description:
    "Mitra Tepat untuk Solusi Pertambangan Anda. Kami menyediakan layanan penambangan komprehensif dengan tim berpengalaman dan peralatan modern.",
};

const ContactUs = () => {
  return (
    <div>
      <PageHeader
        title='Tentang Kami'
        desc='Temukan berbagai informasi tentang bagaimana kami memberikan
              solusi terbaik bagi kebutuhan Anda.'
      />
      <section className='container mx-auto my-20'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
          <div className='lg:col-span-2 max-w-5xl mx-auto'>
            <h2 className='mb-4 text-3xl font-bold text-center'>
              PT Mitra Abadi Mahakam
            </h2>
            <p className='text-base font-light leading-relaxed text-center'>
              PT Mitra Abadi Mahakam adalah Perseroan Terbatas (PT) yang berdiri
              sejak 2010 dan memulai kegiatan usaha sejak 2011. Kegiatan usaha
              yang pertama yaitu penyewaan alat berat di Usaha Bongkar Muat
              (Transhipment) Batu Bara, lalu Pada tahun 2014 melebarkan sayap
              membuka usaha baru sebagai Kontraktor Pertambangan Batu Bara. Kami
              berkomitmen untuk menyediakan rangkaian lengkap layanan
              penambangan untuk batubara dan mineral. Layanan ini disediakan
              oleh orang Indonesia yang sangat berkualitas dan berpengalaman.
              Dan kami juga mendukung di perusahaan Pabrikasi, Penyewaan Alat
              Berat dan Kegiatan Bongkar Muat.
            </p>
          </div>
          <div className=''>
            <h2 className='mb-4 text-3xl font-bold'>Visi</h2>
            <p className='text-base font-light leading-relaxed'>
              Menjadi Perusahaan di Bidang Jasa Pertambangan yang Terpercaya,
              Bertaraf Nasional dan Terdepan Dalam Industri Pertambangan.
            </p>
          </div>
          <div className=''>
            <h2 className='mb-4 text-3xl font-bold'>Misi</h2>
            <p className='text-base font-light leading-relaxed'>
              Menjadi Perusahaan di Bidang Jasa Pertambangan yang Terpercaya,
              Bertaraf Nasional dan Terdepan Dalam Industri Pertambangan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
