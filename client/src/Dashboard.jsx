import { Link } from 'react-router-dom';
import { getGroupsByClerkId } from './apiServices/user-group';
import { getGroupById } from './apiServices/group';
import { useEffect, useState } from 'react';
import { sortNewestFirst } from './utils/sortUtil';
import { useUser } from '@clerk/clerk-react';
import GroupDetails from './GroupDetails';
import './Dashboard.css';

//HOMEPAGE

export default function Dashboard() {
  //get groups user is following
  const [userGroups, setUserGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    getGroupsByClerkId(user.id).then((data) => {
      setUserGroups(data);
    });
  }, [user]);

  useEffect(() => {
    if (userGroups.length > 0) {
      Promise.all(userGroups.map((group) => getGroupById(group.GroupId))).then(
        (data) => {
          setGroups(sortNewestFirst(data));
        }
      );
    }
  }, [userGroups]);

  return (
    <div className='Dashboard'>
      <div className='welcome-message'>
        <h2>Group Expectations</h2>
        <p>
          Welcome to California Writers Club! This is a space in which writers
          can communicate and collaborate with each other. In order to foster a
          productive and supportive community, we have established some basic
          guidelines for participation. By using our community, you agree that
          you have read and will follow the guidelines. You also agree to
          reserve community discussions for topics best suited to the medium.
          This is a fantastic way to solicit the advice of your peers, benefit
          from their experience, and participate in an ongoing conversation. If
          you have any questions, please contact the Administrator through the
          provided menu link. Group Expectations can be reviewed{' '}
          <Link to='/expectations' className='expectations-link'>
            here
          </Link>
        </p>
      </div>
      <div>
        <h2 className='your-groups'>Your Groups</h2>
        {/* List of user's groups */}
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
