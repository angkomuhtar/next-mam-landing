"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  MapPinHouse,
  PhoneCall,
  Twitter,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

const Header = ({ active }: { active: string }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  console.log("getPathname", pathname);

  return (
    <header>
      <nav className='absolute top-0 left-0 right-0 z-10'>
        <div className='bg-red-700 py-0.5 hidden md:block'>
          <div className='container mx-auto flex flex-wrap justify-between md:items-center md:space-x-6 space-y-2'>
            <div className='flex flex-wrap md:space-x-6'>
              <div className='flex justify-start space-x-2 items-center text-white'>
                <MapPinHouse className='w-4' />
                <h2 className='font-mono text-[11px] font-semibold'>
                  Jl. A.W. Syahranie No. 818 Samarinda, Kalimantan Timur
                </h2>
              </div>
              <div className='flex justify-start space-x-2 text-white items-center'>
                <PhoneCall className='w-4' />
                <h2 className='font-mono text-[11px] font-semibold'>
                  0541 25050
                </h2>
              </div>
            </div>
            <div className='flex justify-center items-center space-x-3 text-white'>
              <Link href='#'>
                <Linkedin className='h-4' />
              </Link>
              <Link href='#'>
                <Twitter className='h-4' />
              </Link>
              <Link href='#'>
                <Facebook className='h-4' />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${offset > 47 && "bg-gray-100 offset"} ${
            offset > 45 && "fixed left-0 right-0 top-0"
          } transition-colors duration-200`}>
          <div
            className={`container mx-auto ${
              offset > 45 ? "py-4" : "py-8"
            } flex justify-between items-center`}>
            <div className='w-16'>
              <Link href='/'>
                <Image
                  alt='logo'
                  src={`/assets/images/logo.png`}
                  height={37}
                  width={51}
                />
              </Link>
            </div>
            <div className='md:flex space-x-10 items-center hidden'>
              <div
                className={`flex justify-end md:space-x-4 ${
                  offset > 47 ? "text-black" : "text-red-700"
                }`}>
                <Link
                  href='/'
                  className={`cursor-pointer group ${
                    pathname == "/" && "active"
                  }`}>
                  <p className='nav-link'>Beranda</p>
                  <div className='nav-link-line' />
                </Link>
                <Link
                  href='/about'
                  className={`cursor-pointer group ${
                    pathname.startsWith("/about") && "active"
                  }`}>
                  <p className='nav-link'>Tentang Kami</p>
                  <div className='nav-link-line' />
                </Link>
                <Link
                  href='project'
                  className={`cursor-pointer group ${
                    pathname.startsWith("/project") && "active"
                  }`}>
                  <p className='nav-link'>Proyek Kami</p>
                  <div className='nav-link-line' />
                </Link>
                <Link
                  href='/career'
                  className={`cursor-pointer group ${
                    pathname.startsWith("/career") && "active"
                  }`}>
                  <p className='nav-link'>Karir</p>
                  <div className='nav-link-line' />
                </Link>
                <Link
                  href='/contact-us'
                  className={`cursor-pointer group ${
                    pathname.startsWith("/contact-us") && "active"
                  }`}>
                  <p className='nav-link'>Kontak Kami</p>
                  <div className='nav-link-line' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
