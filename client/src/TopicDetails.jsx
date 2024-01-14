import moment from 'moment';
import './TopicDetails.css';
import { useState, useEffect } from 'react';
import { getMessagesByTopicId } from './apiServices/message';
import { sortNewestFirst } from './utils/sortUtil';

//FORMAT FOR INDIVIDUAL TOPIC ENTRIES

export default function TopicDetails(topic) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessagesByTopicId(topic.topic.id).then((data) => {
      setMessages(sortNewestFirst(data));
    });
  }, []);

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
          <span className='comment'>💬 {messages.length} Comments</span>
          <span className='creator'>
            {messages.length === 0 ? (
              <span>
                Posted on {moment(topic.topic.createdAt).format('LLLL')}
              </span>
            ) : (
              <span>
                Last Commented on {moment(messages[0].createdAt).format('LLLL')}
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
