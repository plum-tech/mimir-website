"use client"

import React, { useState, useEffect } from 'react';
import {
  ArrowUpIcon
} from '@heroicons/react/20/solid'
import { Button } from '@headlessui/react';

export default function GoToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      className={`fixed bottom-4 right-4 rounded-full bg-sky-500 text-white py-2 px-4  hover:bg-sky-500 transition-all duration-300 text-3xl ${showButton ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={handleClick}
    >
      <ArrowUpIcon className='h-8 w-8' />
    </Button>
  );
}