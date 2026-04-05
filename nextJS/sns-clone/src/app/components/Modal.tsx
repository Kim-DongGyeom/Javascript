'use client';

import { useEffect } from 'react';

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  // ESCキーからModal終了
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    // 背景クリックからModal終了
    <div
      className='fixed inset-0 bg-black/50 flex justify-center items-center w-full'
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className='bg-white p-6 rounded-lg relative w-2/3 h-2/3'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Xボタン */}
        <button
          className='absolute top-4 right-4 hover:bg-gray-100 px-1'
          onClick={onClose}
        >
          ✕
        </button>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
}
