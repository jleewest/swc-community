import './GroupsList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getGroups } from './apiServices/group';
import { sortNewestFirst } from './utils/sortUtil';
import GroupDetails from './GroupDetails';

//FORMAT FOR LIST OF ALL GROUPS

export default function GroupsList() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getGroups().then((data) => {
      setGroups(sortNewestFirst(data));
    });
  }, []);

  return (
    <div className='GroupsList'>
      {/* MENU BAR */}
      <div className='groups-menu-bar'>
        <div>
          <Link to='/new-group'>
            <button className='primary-button new-group-button'>
              Request new group
            </button>
          </Link>
        </div>
        <div>
          <form className='search-bar'>
            <input type='text' placeholder='Search for a group...' />
            <button type='submit' className='primary-button'>
              Search
            </button>
          </form>
        </div>
      </div>
      {/* LIST OF GROUPS */}
      <div>
        <div className='group-display'>
          {groups.length > 0 ? (
            groups.map((group) => {
              return (
                <Link to={{ pathname: `/topics/${group.id}` }} key={group.id}>
                  <GroupDetails group={group} />
                </Link>
              );
            })
          ) : (
            <p>There are no groups yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
