'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FcAddImage } from 'react-icons/fc';
import { useState } from 'react';
import Modal from '../Modal';

export default function CreatePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-1 w-full flex items-center'>
      {/* userプロファイルicon */}
      <div className='p-2'>
        <Link
          href='/'
          className='flex items-center justify-center rounded-full transition'
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
      </div>

      {/* 投稿作成 */}
      <div className='w-full p-2'>
        <div
          className='border-1 rounded-2xl text-gray-500 px-4 py-2 w-full text-sm hover:bg-gray-100'
          onClick={() => setIsOpen(true)}
        >
          今どんな気持ち？
        </div>
      </div>

      {/* イメージボタン */}
      <div className='p-2'>
        <div
          className='p-1 rounded-xl hover:bg-gray-100'
          onClick={() => setIsOpen(true)}
        >
          <FcAddImage size={33} />
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          {/* Modal Header */}
          <div>header</div>
          {/* Modal bady */}
          <div>bady</div>
          {/* Modal Footer */}
          <div>Footer</div>
        </Modal>
      )}
    </div>
  );
}
