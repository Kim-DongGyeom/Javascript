'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NewPage() {
  const [content, setContent] = useState('');

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const handleUpdate = async (id: number) => {
    const newContent = prompt('修正する内容');

    await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ content: newContent }),
    });

    location.reload();
  };

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
      <div>
        <Link href='/board'>board</Link>
      </div>
      <div>
        <Link href='/api/posts'>api/posts</Link>
      </div>
      <div>
        <Link href='/qna'>Q&A</Link>
      </div>
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
      <div>
        <h1>投稿の一覧</h1>
        {posts.map((post) => (
          <div key={post.id}>
            {post.content}
            <button onClick={() => handleUpdate(post.id)}>修正</button>
            <button onClick={() => handleUpdate(post.id)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}
