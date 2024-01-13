import { useParams } from 'react-router-dom';
import TopicDetails from './TopicDetails';
import { getTopicById } from './apiServices/topic';
import { useState, useEffect } from 'react';
import moment from 'moment';

export default function TopicComments() {
  const [topic, setTopic] = useState([]);
  const topicId = useParams();

  useEffect(() => {
    getTopicById(topicId.id).then((data) => {
      setTopic(data);
    });
  }, []);

  return (
    <div className='TopicDetails accent-box-design'>
      <div className='topic-container'>
        <div className='header'>
          <div className='title'>{topic.title}</div>
          <div>
            <button className='primary-button'>🤍 Save</button>
            <button className='primary-button'> 🏳️ Report</button>
          </div>
        </div>
        <div className='body'>{topic.body}</div>
        <div className='footer'>
          <span className='comment'>💬Comments</span>
          <span className='creator'>
            Posted on {moment(topic.createdAt).format('LLLL')}
          </span>
        </div>
      </div>
    </div>
  );
}
