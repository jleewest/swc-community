import moment from 'moment';
import './MessageDetails.css';
import { getUserByClerkId } from './apiServices/user';
import { useState, useEffect } from 'react';

//FORMAT FOR INDIVIDUAL MESSAGES WITHIN EACH TOPIC

export default function MessageDetails(message) {
  const [user, setUser] = useState({});
  let username = '';

  useEffect(() => {
    getUserByClerkId(message.message.UserClerkId).then((data) => {
      setUser(data);
    });
  }, [message]);

  if (user.username) {
    username = user.username;
  } else {
    username = user.firstName + ' ' + user.lastName;
  }

  return (
    <div>
      <div className='MessageDetails accent-box-design'>
        <div className='message-header'>
          <div className='message-tag'>
            <span className='message-creator'>{username}</span>
            <span>
              Posted on {moment(message.message.createdAt).format('LLLL')}
            </span>
          </div>
          <div>
            <span>Edit</span> | <span>Delete</span>
          </div>
        </div>
        <div className='message-body'>{message.message.body}</div>
      </div>
    </div>
  );
}
