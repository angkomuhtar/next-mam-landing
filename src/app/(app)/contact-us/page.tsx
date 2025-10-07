import PageHeader from "@/components/ui/page-header";
import React from "react";
import { Clock, Mail, MapIcon, PhoneCall } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak - PT Mitra Abadi Mahakam",
  description:
    "Mitra Tepat untuk Solusi Pertambangan Anda. Kami menyediakan layanan penambangan komprehensif dengan tim berpengalaman dan peralatan modern.",
};

const ContactUs = () => {
  return (
    <div>
      <PageHeader
        title='Kontak Kami'
        desc='Temukan Informasi Lebih Lanjut Tentang Kami'
      />
      <section className='container mx-auto my-20'>
        <div className='grid lg:grid-cols-2 gap-8 md:gap-16'>
          <div>
            <h2 className='mb-4 text-4xl font-bold'>Hubungi Kami</h2>
            <p className='text-base font-extralight mb-8'>
              Kami dengan senang hati siap membantu Anda. Silakan hubungi kami
              melalui informasi berikut atau isi formulir di bawah ini.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <label className='block text-sm font-medium text-gray-900 dark:text-white'>
                  Nama *
                </label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs block w-full p-2.5'
                  placeholder='John'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <label className='block text-sm font-medium text-gray-900 dark:text-white'>
                  Email *
                </label>
                <input
                  type='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs block w-full p-2.5'
                  placeholder='John@doe.com'
                  required
                />
              </div>

              <div className='grid gap-2 col-span-2'>
                <label className='block text-sm text-gray-900 dark:text-white'>
                  Upload file
                </label>
                <input
                  className='block w-full text-sm text-gray-900 border border-gray-300 rounded-xs cursor-pointer bg-gray-50 p-2.5'
                  id='file_input'
                  type='file'></input>
              </div>

              <div className='grid gap-2 col-span-2'>
                <label className='block text-sm font-medium text-gray-900 dark:text-white'>
                  Subjek
                </label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs block w-full p-2.5'
                  placeholder='Sebuah Pertanyaan'
                  required
                />
              </div>
              <div className='grid gap-2 col-span-2'>
                <label className='block text-sm font-medium text-gray-900 dark:text-white'>
                  Pesan
                </label>
                <textarea
                  rows={5}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs block w-full p-2.5'
                  placeholder='Sebuah Pertanyaan'
                  required
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-8 place-content-start'>
            <div className='grid gap-2'>
              <h2 className='text-2xl'>
                <b>Kantor</b> Kami
              </h2>
              <div className='flex items-center'>
                <div className='rounded-full bg-red-600 p-1.5'>
                  <MapIcon className='text-white w-4 h-4' />
                </div>
                <p className='ml-2 text-sm'>
                  <b>Alamat : </b>
                  Jl. A.W. Syahranie No. 818, Samarinda, Kalimantan Timur
                </p>
              </div>
              <div className='flex items-center'>
                <div className='rounded-full bg-red-600 p-1.5'>
                  <PhoneCall className='text-white w-4 h-4' />
                </div>
                <p className='ml-2 text-sm'>
                  <b>Telp : </b>
                  +62541 25050
                </p>
              </div>
              <div className='flex items-center'>
                <div className='rounded-full bg-red-600 p-1.5'>
                  <Mail className='text-white w-4 h-4' />
                </div>
                <p className='ml-2 text-sm'>
                  <b>Email : </b>
                  info@mitraabadimahakam.id
                </p>
              </div>
            </div>
            <div className='grid gap-2'>
              <h2 className='text-2xl'>
                <b>Jam Kerja</b>
              </h2>
              <div className='flex items-center'>
                <Clock className='w-4 h-4' />
                <p className='ml-2 text-sm'>
                  <b>Senin-Jumat : </b>
                  08.00 - 17.00 WITA
                </p>
              </div>
              <div className='flex items-center'>
                <Clock className='w-4 h-4' />
                <p className='ml-2 text-sm'>
                  <b>Sabtu : </b>
                  08.00 - 13.00 WITA
                </p>
              </div>
              <div className='flex items-center'>
                <Clock className='w-4 h-4' />
                <p className='ml-2 text-sm'>
                  <b>Minggu : </b>
                  Libur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.694574483884!2d117.14228387612341!3d-0.4512607184201471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67ed6900766c5%3A0xae9c2be7d7778e54!2sPT%20Mitra%20Abadi%20Mahakam!5e0!3m2!1sid!2sid!4v1759452108401!5m2!1sid!2sid'
          width='100%'
          height='650'
          className='border-0'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
