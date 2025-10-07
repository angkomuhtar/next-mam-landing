"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const AccordionCareer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='accordion-item'>
      <button
        type='button'
        onClick={() => setOpen(!open)}
        className={` flex items-center justify-between w-full py-5 font-medium cursor-pointer ${
          open ? "text-gray-900" : "text-gray-500"
        }  border-b border-gray-200 gap-3`}>
        <span>What is Flowbite?</span>
        <ChevronDown
          className={`${
            open ? "rotate-180" : ""
          } transition-transform duration-300`}
        />
      </button>
      <div
        className={`${
          open ? "h-auto" : "h-0"
        } overflow-hidden transition-all duration-1000`}>
        <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
          <p className='mb-2 text-gray-500 dark:text-gray-400'>
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dro pdowns, modals,
            navbars, and more.
          </p>
          <p className='text-gray-500 dark:text-gray-400'>
            Check out this guide to learn how to{" "}
            <a
              href='/docs/getting-started/introduction/'
              className='text-blue-600 dark:text-blue-500 hover:underline'>
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionCareer;
