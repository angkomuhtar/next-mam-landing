import { Facebook, Linkedin, Send, Twitter } from "lucide-react";
import React from "react";
import AM from "@/../public/assets/icon/AM";

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container mx-auto md:grid grid-cols-3 gap-8 py-10'>
        <div className='text-white'>
          <h3 className='text-lg font-bold'>MITRA ABADI MAHAKAM</h3>
          <p className='text-xs font-light'>
            Trusted and reliable service is our to main goal extremely painful.
            again a there anyone loves our chooses
          </p>
          <h3 className='mt-5 mb-3 font-semibold '>Contact Info</h3>
          <ul className='space-y-3'>
            <li className=''>
              <h2 className='text-xs font-semibold uppercase'>OfFice</h2>
              <p className='text-[11px] font-light '>
                A. W. Syaharanie No. 40, Samarinda, Kalimantan Timur
              </p>
            </li>
            <li>
              <h2 className=' text-xs font-semibold uppercase'>Phone</h2>
              <p className='text-[11px] font-light '>
                +62 542 6253601, +62 542 6253601
              </p>
            </li>
            <li>
              <h2 className=' text-xs font-semibold uppercase'>Mail</h2>
              <p className='text-xs font-light '>info@mitraabadimahakam.id</p>
            </li>
            <li>
              <h2 className=' text-xs font-semibold uppercase'>
                Working Hours
              </h2>
              <p className='text-xs font-light '>
                Mon - Sat / 08:00 AM - 05:00 PM
              </p>
            </li>
          </ul>
        </div>

        <div className='text-white'>
          <h3 className='text-lg font-bold'>Quick Links</h3>
          <ul className='mt-3 space-y-2  text-sm'>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Our Service
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Our Great Teams
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Our Latests Works
              </a>
            </li>

            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Career
              </a>
            </li>
          </ul>
        </div>

        <div className='text-white'>
          <h3 className='text-lg font-bold'>Newsletters</h3>
          <p className='text-xs font-light'>
            Subscribe our Newsletter to get latest update, offers and promotions
          </p>
          <div className='flex my-3'>
            <input
              type='email'
              placeholder='Email Address'
              className='py-2 px-4 rounded-l-md bg-black border border-white  text-sm w-4/6 font-extralight'
            />
            <button className='bg-white pr-3 pl-2 rounded-r-md items-center'>
              <Send className='w-5 text-black' />
            </button>
          </div>

          <h3 className='mt-5 mb-3 font-semibold '>Social Media</h3>
          <div className='flex space-x-3 items-center'>
            <Facebook className='w-8' />
            <Twitter className='w-8' />
            <Linkedin className='w-8' />
          </div>
        </div>
      </div>
      <div className='container mx-auto flex justify-between items-center text-white py-4'>
        <p className='text-[11px]'>
          &copy; Mitra Abadi Mahakam, All rights Reserved
        </p>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <AM className='w-3' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
