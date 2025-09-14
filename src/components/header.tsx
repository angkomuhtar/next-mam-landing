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
import { useRouter } from "next/navigation";

const Header = ({ active }: { active: string }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const router = useRouter();
  return (
    <header>
      <nav className='absolute top-0 left-0 right-0 z-10'>
        <div className='bg-red-700 py-0.5 hidden md:block'>
          <div className='container mx-auto flex flex-wrap justify-between md:items-center md:space-x-6 space-y-2'>
            <div className='flex flex-wrap md:space-x-6'>
              <div className='flex justify-start space-x-2 items-center text-white'>
                <MapPinHouse className='w-4' />
                <h2 className='font-mono text-[11px] font-semibold'>
                  Jl. A.W. Syahranie No. 40 Samarinda, East Kalimantan
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
          className={`${offset > 47 && "bg-gray-100"} ${
            offset > 45 && "fixed left-0 right-0 top-0"
          } transition-colors duration-200`}>
          <div
            className={`container mx-auto ${
              offset > 45 ? "py-4" : "py-8"
            } flex justify-between items-center transform duration-200`}>
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
                <Link href='about' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "about" && "text-red-700"
                    }`}>
                    About Us
                  </p>
                  <div
                    className={`nav-line ${
                      active == "about" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='service' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "service" && "text-red-700"
                    }`}>
                    Services
                  </p>
                  <div
                    className={`nav-line ${
                      active == "service" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='teams' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "teams" && "text-red-700"
                    }`}>
                    Teams
                  </p>
                  <div
                    className={`nav-line ${
                      active == "teams" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='works' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "works" && "text-red-700"
                    }`}>
                    Works
                  </p>
                  <div
                    className={`nav-line ${
                      active == "works" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='career' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "career" && "text-red-700"
                    }`}>
                    Career
                  </p>
                  <div
                    className={`nav-line ${
                      active == "career" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
              </div>
              <button className='uppercase bg-red-700 text-white font-semibold py-3 px-6 rounded-md text-xs hover:bg-white hover:text-red-700'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
