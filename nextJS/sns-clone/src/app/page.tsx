import Link from 'next/link';
import CreatePage from './components/board/CreatePage';
import Modal from './components/Modal';

export default function Home() {
  return (
    <div className='w-full'>
      <CreatePage />
    </div>
  );
}
