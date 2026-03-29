'use client';

import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import Link from 'next/link';

import navItem from '../../../util/navMap.json';
import logo from '../favicon.ico';
import Image from 'next/image';

export default function Nav() {
  const [search, SetSearch] = useState('');
  return (
    <div className='flex justify-between border-1 solid round px-4'>
      {/* logo */}
      <div className='flex'>
        <Link
          href='/'
          className='p-2 flex items-center justify-center rounded-full transition'
        >
          <div className='border rounded-full overflow-hidden'>
            <Image
              src='/assets/favicon.png'
              alt='logo'
              width={40}
              height={40}
              className='object-cover'
              priority
            />
          </div>
        </Link>
        {/* nav */}
        <div className='flex justify-center items-center ml-4'>
          {navItem.map((item, idx) => {
            return (
              <Link className='px-3' href={item.href} key={idx}>
                {item.value}
              </Link>
            );
          })}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        {/* search bar */}
        <div className='relative w-45 mr-4'>
          <input
            className='w-full border rounded-lg px-2 p-1'
            type='text'
            placeholder='検索'
            onChange={(e) => {
              SetSearch(e.target.value);
            }}
          />
          <button
            type='button'
            className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'
            onClick={() => {
              console.log(search);
            }}
          >
            <IoIosSearch className='w-5 h-5' />
          </button>
        </div>
        {/* proflie */}
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center w-10 h-10 border rounded-full text-xs'>
            size
          </div>
        </div>
      </div>
    </div>
  );
}
