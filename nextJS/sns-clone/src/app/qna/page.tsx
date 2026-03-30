'use client';

import { useEffect, useState } from 'react';
import TimeAgo from './../components/TimeAgo';

type Qna = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function QnaPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [list, setList] = useState<Qna[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const fetchList = async () => {
    try {
      const res = await fetch('/api/qna');
      if (!res.ok) throw new Error();

      const data = await res.json();
      setList(data);
    } catch {
      alert('データ取得に失敗しました');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleCreate = async () => {
    if (!title.trim() || !content.trim()) {
      alert('タイトルと内容を入力してください。');
      return;
    }

    const res = await fetch('/api/qna', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert('登録しました。');
      setTitle('');
      setContent('');
      fetchList();
    } else {
      alert('登録に失敗しました');
    }
  };

  const handleEdit = (item: Qna) => {
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert('修正しました。');
      setTitle('');
      setContent('');
      setEditId(null);
      fetchList();
    } else {
      alert('修正に失敗しました');
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/qna/${id}`, {
      method: 'DELETE',
    });
    console.log(res.ok);
    if (res.ok) {
      alert('削除しました。');
      fetchList();
    } else {
      alert('削除に失敗しました');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setEditId(null);
  };

  return (
    <div className='pt-5 w-full max-w-3xl mx-auto'>
      {/* Q&Aページタイトル */}
      <div className='flex justify-center text-3xl my-6'>
        <h1>Q&A掲示板</h1>
      </div>

      {/* 入力フォーム */}
      <div className='mb-6 space-y-3'>
        <div className='flex items-center'>
          <div className='w-20 text-center'>タイトル</div>
          <span className='mx-2'>：</span>
          <input
            className='w-full border-b focus:outline-none px-1 py-1'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='flex items-start'>
          <div className='w-20 text-center mt-2'>内容</div>
          <span className='mx-2 mt-2'>：</span>
          <textarea
            className='w-full border-b resize-none focus:outline-none overflow-hidden px-1 py-1'
            rows={1}
            value={content}
            onInput={(e) => {
              const el = e.currentTarget;
              el.style.height = 'auto';
              el.style.height = el.scrollHeight + 'px';
            }}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>

      {/* ボタン */}
      <div className='flex justify-center gap-3 mb-6'>
        <button
          onClick={editId ? handleUpdate : handleCreate}
          className='px-4 py-2 bg-sky-500 text-white rounded-xl'
        >
          {editId ? '修正' : '登録'}
        </button>

        <button onClick={handleCancel} className='px-4 py-2 border rounded-xl'>
          キャンセル
        </button>
      </div>

      {/* Q&Aテーブル */}
      <table className='w-full border border-gray-300 text-sm'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='p-2 border'>番号</th>
            <th className='p-2 border'>タイトル</th>
            <th className='p-2 border'>内容</th>
            <th className='p-2 border'>作成時間</th>
            <th className='p-2 border'></th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, idx) => (
            <tr key={item.id} className='text-center'>
              <td className='p-2 border'>{idx + 1}</td>
              <td className='p-2 border'>{item.title}</td>
              <td className='p-2 border'>{item.content}</td>
              <td className='p-2 border'>
                <TimeAgo date={item.created_at} />
              </td>
              <td className='p-2 border space-x-2'>
                <button
                  onClick={() => handleEdit(item)}
                  className='text-blue-500'
                >
                  修正
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='text-red-500'
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
