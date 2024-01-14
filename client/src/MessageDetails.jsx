import moment from 'moment';
//import './TopicDetails.css';

//FORMAT FOR INDIVIDUAL MESSAGES WITHIN EACH TOPIC

export default function MessageDetails(message) {
  return (
    <div className='MessageDetails accent-box-design'>
      <div className='message-container'>
        <div className='body'>{message.message.body}</div>
        <div className='footer'>
          <span className='creator'>
            Posted on {moment(message.message.createdAt).format('LLLL')}
          </span>
          <div>
            <span>Edit</span>|<span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
