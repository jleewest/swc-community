import { Link } from 'react-router-dom';
import './Dashboard.css';

//HOMEPAGE

export default function Dashboard() {
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
      <div className='your-groups'>
        <h2>Your Groups</h2>
      </div>
    </div>
  );
}
