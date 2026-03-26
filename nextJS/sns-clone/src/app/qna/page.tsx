'use client';

import { useEffect, useState } from 'react';

export default function QnaPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [list, setList] = useState<any[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const fetchList = async () => {
    const res = await fetch('/api/qna');
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);
  useEffect(() => {
    console.log(title);
    console.log(content);
  }, [title, content]);

  const handleCreate = async () => {
    if ((!title?.trim(), !content?.trim())) {
      alert('タイトル内容を');
      return;
    }

    const res = await fetch('/api/qna', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setTitle('');
      setContent('');
      fetchList();
    }
  };

  const handleEdit = (item: any) => {
    setTitle(item.title);
    setContent(item.content);
    setEditId(item.id);
  };

  const handleUpdate = async () => {
    if (!editId) {
      alert('修正する対象を選択してください。');
      return;
    }

    const res = await fetch(`/api/qna/${editId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setTitle('');
      setContent('');
      setEditId(null);
      fetchList();
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/qna/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      fetchList();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Q&A掲示板</h1>

      {/* 入力 */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='タイトル'
      />
      <br />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='内容'
      />
      <br />

      {/* CREATE / UPDATE ボタン */}
      {editId ? (
        <button onClick={handleUpdate}>修正</button>
      ) : (
        <button onClick={handleCreate}>登録</button>
      )}

      <hr />

      {/* リスト */}
      {list.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <p>{item.created_at}</p>

          <button onClick={() => handleEdit(item)}>修正</button>
          <button onClick={() => handleDelete(item.id)}>削除</button>
        </div>
      ))}
    </div>
  );
}
