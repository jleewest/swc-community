import moment from 'moment';

export default function TopicDetails(topic) {
  console.log(topic);
  console.log(topic.topic.title);
  return (
    <div className='TopicDetails'>
      <div className='topic-container'>
        <div className='header'>
          <div className='title'>
            <h3>{topic.topic.title}</h3>
          </div>
          <button>🤍 Save</button>
          <button> 🏳️ Report</button>
        </div>
        <div className='body'>
          <h4>{topic.topic.body}</h4>
        </div>
        <div className='footer'>
          <span>💬Comments</span>
          <span>Posted by {moment(topic.createdAt).format('LLLL')}</span>
        </div>
      </div>
    </div>
  );
}
