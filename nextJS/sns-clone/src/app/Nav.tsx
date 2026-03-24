'use client';

import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';

export default function Nav() {
  const [id, setId] = useState('');
  return (
    <div>
      <div>
        <Link href='/'>home</Link>
      </div>
      <div>
        <Link href='/board'>board</Link>
      </div>
      <div>
        <Link href='/board/new'>board/new</Link>
      </div>
      <div>
        <Link href='/api/posts'>api/posts</Link>
      </div>
      <div>
        <Link href='/qna'>Q&A</Link>
      </div>
      {/* <div>
        <input
          type='text'
          value={id}
          onChange={(e) => {
            console.log(e.target.value);
            setId(e.target.value);
          }}
        />
        <button
          onClick={() => {
            location.href = '/api/posts/' + id;
          }}
        >
          OK
        </button>
      </div> */}
    </div>
  );
}
