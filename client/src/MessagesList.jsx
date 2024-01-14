import { useParams } from 'react-router-dom';
import { getTopicById } from './apiServices/topic';
import { postMessage, getMessagesByTopicId } from './apiServices/message';
import { useState, useEffect } from 'react';
import { sortOldestFirst } from './utils/sortUtil';
import MessageDetails from './MessageDetails';
import moment from 'moment';
import './MessagesList.css';

//FORMAT FOR LIST OF ALL MESSAGES FOR EACH TOPIC

export default function MessagesList() {
  const [topic, setTopic] = useState([]);
  const [messages, setMessages] = useState([]);
  const topicId = useParams();

  useEffect(() => {
    getTopicById(topicId.id).then((data) => {
      setTopic(data);
    });
    getMessagesByTopicId(topicId.id).then((data) => {
      setMessages(sortOldestFirst(data));
    });
  }, [topicId]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const newMessage = {
      body: event.target[0].value,
      TopicId: topicId.id,
    };

    postMessage(newMessage).then((data) => {
      setMessages((prev) => {
        return sortOldestFirst([...prev, data]);
      });
    });
    event.target.reset();
  }

  return (
    <div className='MessagesList '>
      {/* TOPIC POST */}
      <div className='topic-container accent-box-design'>
        <div className='topic-header'>
          <div className='title'>{topic.title}</div>
          <div>
            <button className='primary-button'>🤍 Save</button>
            <button className='primary-button'> 🏳️ Report</button>
          </div>
        </div>
        <div className='topic-body'>{topic.body}</div>
        <div className='footer'>
          <span className='comment'>💬 {messages.length} Comments</span>
          <span className='topic-creator'>
            Discussion Started on {moment(topic.createdAt).format('LLLL')}
          </span>
        </div>
      </div>
      {/* MESSAGES LIST */}
      <div className='messages-container'>
        <div className='main-body'>
          <div className='message-display'>
            {messages.length > 0 ? (
              messages.map((message) => {
                return <MessageDetails key={message.id} message={message} />;
              })
            ) : (
              <p>There are no comments yet...</p>
            )}
          </div>
        </div>
      </div>
      {/* POST COMMENT FORM */}
      <form className='new-comment-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='body'
          id='body'
          placeholder='Comment on the topic...'
          required
        />
        <button type='submit' className='primary-button'>
          Post
        </button>
      </form>
    </div>
  );
}
