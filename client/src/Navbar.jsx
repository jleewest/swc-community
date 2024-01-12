import './Navbar.css';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <ul className='nav-routes'>
        <button>Home</button>
        <button>Your Profile</button>
        <button>Your Groups</button>
        <button>Search Groups</button>
        <button>Members</button>
        <button>FAQs</button>
        <button>Contact Administrator</button>
      </ul>
      <div className='buttons'>
        <button>Add New Group</button>
        <button>Logout</button>
      </div>
    </div>
  );
}
