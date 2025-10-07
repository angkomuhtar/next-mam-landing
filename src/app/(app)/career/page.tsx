import PageHeader from "@/components/ui/page-header";
import React from "react";
import { MessageCircleWarning } from "lucide-react";
import AccordionCareer from "@/components/accordion-career";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karir - PT Mitra Abadi Mahakam",
  description:
    "Mitra Tepat untuk Solusi Pertambangan Anda. Kami menyediakan layanan penambangan komprehensif dengan tim berpengalaman dan peralatan modern.",
};

const ContactUs = () => {
  return (
    <div>
      <PageHeader
        title='Karir'
        desc='Kami Selalu Terbuka untuk anda menemukan Peluang Baru'
      />
      <section className='container mx-auto my-20'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
          <div className=''>
            <h2 className='mb-4 text-4xl font-bold'>Temukan Kesempatanmu</h2>
            <p className='text-base font-light leading-relaxed'>
              Pintu karir di PT Mitra Abadi Mahakam selalu terbuka bagi individu
              yang berbakat dan berdedikasi. Kami mencari profesional yang
              bersemangat untuk bergabung dengan tim kami dan berkontribusi pada
              kesuksesan bersama. Jelajahi peluang karir kami dan temukan
              bagaimana Anda dapat berkembang bersama kami.
            </p>
          </div>

          <div className='p-4 rounded-sm bg-red-500 '>
            <div className='flex space-x-3 items-center mb-2'>
              <MessageCircleWarning />
              <h2 className='font-bold text-2xl'>Informasi Penting</h2>
            </div>
            <div>
              <p className='uppercase text-xs font-extrabold text-white mb-2 leading-snug'>
                MOHON BERHATI-HATI TERHADAP PENIPUAN MENGATASNAMAKAN RECRUITMENT
                PT MITRA ABADI MAHAKAM
              </p>
              <p className='text-sm text-white leading-snug'>
                PT Mitra Abadi Mahakam tidak pernah memungut biaya apapun dalam
                proses rekrutmen (MCU, Akomodasi dan biaya lainnya). PT Mitra
                Abadi Mahakam tidak pernah mencantumkan nomor Telp/HP dalam
                flyer lowongan pekerjaan, kami hanya menyertakan email dan link
                resmi perusahaan. Jika Anda menerima tawaran pekerjaan yang
                mencurigakan atau diminta untuk membayar sejumlah uang, harap
                segera laporkan ke kami melalui email resmi Berikut ini : &nbsp;
                <a
                  href='mailto:recruitment@mitraabadimahakam.id'
                  className='underline font-bold'>
                  recruitment@mitraabadimahakam.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto my-20'>
        <div className='max-w-3xl w-full mx-auto min-h-64 place-items-start'>
          <form className='max-w-xl mx-auto w-full mb-8'>
            <select
              id='jobs'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full'>
              <option value='' selected>
                Pilih Pekerjaan
              </option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
          </form>
          <div className='w-full'>
            <AccordionCareer />
            <AccordionCareer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
