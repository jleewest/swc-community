import './Display.css';
import Navbar from './Navbar';

export default function Display() {
  return (
    <div className='Display'>
      <header>
        <div className='banner'>
          <div className='banner-title'>Welcome!</div>
        </div>
      </header>
      <body>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='route-display'>Other Text</div>
      </body>
      <footer></footer>
    </div>
  );
}
