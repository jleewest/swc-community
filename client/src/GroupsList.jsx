import './GroupsList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getGroups } from './apiServices/group';
import { getGroupsByClerkId } from './apiServices/user-group';
import { sortNewestFirst } from './utils/sortUtil';
import GroupDetails from './GroupDetails';
import { useUser } from '@clerk/clerk-react';

//FORMAT FOR LIST OF ALL GROUPS

export default function GroupsList() {
  const [groups, setGroups] = useState([]);
  const { user } = useUser();

  //filters out groups user is already following from the groups page
  useEffect(() => {
    const filterGroups = async () => {
      const userData = await getGroupsByClerkId(user.id);
      const allGroups = await getGroups();
      const filteredGroups = allGroups.filter(
        (group) => !userData.some((userGroup) => userGroup.GroupId === group.id)
      );
      setGroups(sortNewestFirst(filteredGroups));
    };

    filterGroups();
  }, [user]);

  return (
    <div className='GroupsList'>
      <div className='display-header accent-box-design'>Groups</div>
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
