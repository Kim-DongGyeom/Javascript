'use client';

import { useState } from 'react';

export default function NewPage() {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
    setContent('');
    console.log('完了!');
  };

  return (
    <div>
      <h1>投稿作成</h1>
      <input
        className='border-solid'
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>作成</button>
    </div>
  );
}
