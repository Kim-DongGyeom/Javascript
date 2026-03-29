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
  useEffect(() => {}, [title, content]);

  const handleCreate = async () => {
    if (!title?.trim() && !content?.trim()) {
      alert('タイトル内容を入力してください。');
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

  const handleCansel = () => {
    setTitle('');
    setContent('');
    setEditId(null);
    fetchList();
  };

  return (
    <div className='pt-5 w-full'>
      <div className='flex justify-center text-3xl my-4'>
        <h1>Q&A掲示板</h1>
      </div>

      <div className='mb-4'>
        {/* 入力 */}
        <div className='flex mb-2'>
          <div className='w-20 flex justify-center items-center'>タイトル</div>
          <div>：</div>
          <div className='w-full border-b-1 solid'>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='タイトル'
            />
          </div>
        </div>
        <div className='flex'>
          <div className='w-20 flex justify-center items-center'>内容</div>
          <div className='flex justify-center items-center'>：</div>
          <textarea
            className='w-full border-b-1 solid resize-none'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='内容'
          />
        </div>
      </div>

      <div className='flex justify-center items-center text-center'>
        {/* CREATE / UPDATE ボタン */}
        <div className='p-2 bg-sky-500 text-white rounded-xl w-22 mr-3'>
          {editId ? (
            <button onClick={handleUpdate}>修正</button>
          ) : (
            <button onClick={handleCreate}>登録</button>
          )}
        </div>
        <div className='p-2 border-1 solid rounded-xl w-22'>
          <button onClick={handleCansel}>キャンセル</button>
        </div>
      </div>

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
