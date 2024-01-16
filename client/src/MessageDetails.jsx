import moment from 'moment';
import './MessageDetails.css';
import { getUserByClerkId } from './apiServices/user';
import { useState, useEffect } from 'react';

//FORMAT FOR INDIVIDUAL MESSAGES WITHIN EACH TOPIC

export default function MessageDetails(message) {
  const [user, setUser] = useState('');
  //let username = '';

  //get username of post creator
  useEffect(() => {
    getUserByClerkId(message.message.UserClerkId).then((data) => {
      let username;
      if (data.username) {
        username = data.username;
      } else {
        username = data.firstName + ' ' + data.lastName;
      }
      setUser(username);
    });
  }, [message]);

  return (
    <div>
      <div className='MessageDetails accent-box-design'>
        <div className='message-header'>
          <div className='message-tag'>
            <span className='message-creator'>{user}</span>
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
