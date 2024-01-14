import './Navbar.css';
import { Link } from 'react-router-dom';

//SIDE NAVIGATION BAR LIST OF LINKS

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div>
        <ul className='nav-routes'>
          <li className='nav-home'>
            <Link to='/'>Home</Link>
          </li>
          <li>Your Profile</li>
          <li>
            <Link to='/groups'>Your Groups</Link>
          </li>
          <li>Search Groups</li>
          <li>Members</li>
          <li>FAQs</li>
          <li>Contact Administrator</li>
        </ul>
      </div>
      <div className='center-button'>
        <button className='logout-button primary-button'>Logout</button>
      </div>
    </div>
  );
}
