'use client';

import { useEffect, useState } from 'react';

export default function BoardPage() {
  const [posts, setPosts] = useState<any[]>([]);

  const handleUpdate = async (id: number) => {
    const newContent = prompt('수정할 내용');

    await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ content: newContent }),
    });

    location.reload();
  };
  console.log(posts);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <h1>投稿の一覧</h1>
      {posts.map((post) => (
        <div key={post.id}>
          {post.content}
          <button onClick={() => handleUpdate(post.id)}>수정</button>
        </div>
      ))}
    </div>
  );
}
