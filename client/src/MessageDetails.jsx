import moment from 'moment';
//import './TopicDetails.css';

export default function MessageDetails(message) {
  console.log(message);
  return (
    <div className='MessageDetails accent-box-design'>
      <div className='message-container'>
        <div className='body'>{message.message.body}</div>
        <div className='footer'>
          <span className='creator'>
            Posted on {moment(message.createdAt).format('LLLL')}
          </span>
        </div>
      </div>
    </div>
  );
}
