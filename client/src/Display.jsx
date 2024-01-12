import './Display.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import GroupsList from './GroupsList';

export default function Display() {
  return (
    <div className='Display'>
      <header>
        <div className='banner'>
          <div className='banner-title'>Welcome!</div>
        </div>
      </header>
      <main>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='route-display'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/groups' element={<GroupsList />} />
          </Routes>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
