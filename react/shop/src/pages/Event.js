import { Link, Outlet } from 'react-router-dom';

export default function Event() {
  return (
    <div>
      <div>今日のイヴェント</div>
      <Link to='./one'>one</Link>
      <div></div>
      <Link to='./two'>two</Link>
      <Outlet></Outlet>
    </div>
  );
}
