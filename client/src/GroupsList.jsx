import './GroupsList.css';
import { Link } from 'react-router-dom';

//FORMAT FOR LIST OF ALL GROUPS

export default function GroupsList() {
  return (
    <div className='GroupsList'>
      {/* MENU BAR */}
      <div className='groups-menu-bar'>
        <div>
          <form className='search-bar'>
            <input type='text' placeholder='Search for a group...' />
            <button type='submit' className='primary-button'>
              Search
            </button>
          </form>
        </div>
        <div>
          <Link to='/new-group'>
            <button className='primary-button new-group-button'>
              Request new group
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
