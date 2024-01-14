import './Display.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import GroupsList from './GroupsList';
import MessagesList from './MessagesList';

//DISPLAY STRUCTURE WITHIN WHICH ALL COMPONENTS ARE LOADED

export default function Display() {
  return (
    <div className='Display'>
      <header>
        <div className='banner'>
          <div className='banner-title'>Welcome!</div>
        </div>
      </header>
      <main>
        <div className='display-navbar'>
          <Navbar />
        </div>
        <div className='route-display'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/groups' element={<GroupsList />} />
            <Route path='/messages/:id' element={<MessagesList />} />
          </Routes>
        </div>
      </main>
      <footer>
        Open Source Code by{' '}
        <a href='#' target='_blank'>
          Jenna Westendorf
        </a>
      </footer>
    </div>
  );
}
