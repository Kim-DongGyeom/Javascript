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
    <div className='flex justify-between border-1 solid round'>
      {/* logo */}
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
      <div className='flex justify-center'>
        {navItem.map((item, idx) => {
          return (
            <Link className='p-3' href={item.href} key={idx}>
              {item.value}
            </Link>
          );
        })}
      </div>
      <div className='flex'>
        {/* search bar */}
        <div className='p-3'>
          <input
            className='w-32 border-1 solid rounded-lg pl-2 mr-2'
            type='text'
            placeholder='検索'
            onChange={(e) => {
              SetSearch(e.target.value);
            }}
          />
          <button
            type='button'
            onClick={() => {
              // 検索機能開発予定
              console.log(search);
            }}
          >
            <IoIosSearch />
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
