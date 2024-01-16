import './Navbar.css';
import { Link } from 'react-router-dom';
import { SignOutButton } from '@clerk/clerk-react';

//SIDE NAVIGATION BAR LIST OF LINKS

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div>
        <ul className='nav-routes'>
          <Link to='/'>
            <li className='nav-home'>Home</li>
          </Link>
          <Link to='/groups'>
            <li>Search Groups</li>
          </Link>
          <li>Members</li>
          <li>FAQs</li>
          <li>Contact Administrator</li>
        </ul>
      </div>
      <div className='center-button'>
        <SignOutButton afterSignOutUrl='/'>
          <button className='logout-button primary-button'>Logout</button>
        </SignOutButton>
      </div>
    </div>
  );
}
