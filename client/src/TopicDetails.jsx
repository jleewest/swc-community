import moment from 'moment';
import './TopicDetails.css';

export default function TopicDetails(topic) {
  return (
    <div className='TopicDetails accent-box-design'>
      <div className='topic-container'>
        <div className='header'>
          <div className='title'>{topic.topic.title}</div>
          <div>
            <button className='primary-button'>🤍 Save</button>
            <button className='primary-button'> 🏳️ Report</button>
          </div>
        </div>
        <div className='body'>{topic.topic.body}</div>
        <div className='footer'>
          <span className='comment'>💬Comments</span>
          <span className='creator'>
            Posted on {moment(topic.topic.createdAt).format('LLLL')}
          </span>
        </div>
      </div>
    </div>
  );
}
