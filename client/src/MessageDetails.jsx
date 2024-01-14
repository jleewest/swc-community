import moment from 'moment';
import './MessageDetails.css';

//FORMAT FOR INDIVIDUAL MESSAGES WITHIN EACH TOPIC

export default function MessageDetails(message) {
  return (
    <div className='MessageDetails accent-box-design'>
      <div className='message-header'>
        <div className='message-tag'>
          <span className='message-creator'>Username</span>
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
  );
}
