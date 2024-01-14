import './Navbar.css';
import { Link } from 'react-router-dom';

//SIDE NAVIGATION BAR LIST OF LINKS

export default function Navbar() {
  return (
    <div className='Navbar'>
      <ul className='nav-routes'>
        <li>
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
      <div className='buttons'>
        <button>Add New Group</button>
        <button>Logout</button>
      </div>
    </div>
  );
}
