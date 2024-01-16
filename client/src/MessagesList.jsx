import { useParams } from 'react-router-dom';
import { getTopicsById } from './apiServices/topic';
import { postMessage, getMessagesByTopicId } from './apiServices/message';
import { getUserByClerkId } from './apiServices/user';
import { useState, useEffect } from 'react';
import { sortOldestFirst } from './utils/sortUtil';
import MessageDetails from './MessageDetails';
import moment from 'moment';
import './MessagesList.css';
import { useUser } from '@clerk/clerk-react';

//FORMAT FOR LIST OF ALL MESSAGES FOR EACH TOPIC

export default function MessagesList() {
  const [topic, setTopic] = useState([]);
  const [messages, setMessages] = useState([]);
  const [topicUser, setTopicUser] = useState('');
  const params = useParams();
  const { user } = useUser();

  //set header topic and all messages related to topic
  useEffect(() => {
    getTopicsById(params.groupId).then((data) => {
      setTopic(data);
    });
    getMessagesByTopicId(params.topicId).then((data) => {
      setMessages(sortOldestFirst(data));
    });
  }, [params]);

  //set username of topic creator
  useEffect(() => {
    if (topic.length > 0) {
      getUserByClerkId(topic[0].UserClerkId).then((data) => {
        let username;
        if (data.username) {
          username = data.username;
        } else {
          username = data.firstName + ' ' + data.lastName;
        }
        setTopicUser(username);
      });
    }
  }, [topic]);

  function handleSubmit(event) {
    event.preventDefault();
    const newMessage = {
      body: event.target[0].value,
      TopicId: params.topicId,
      UserClerkId: user.id,
    };

    postMessage(newMessage).then((data) => {
      setMessages((prev) => {
        return sortOldestFirst([...prev, data]);
      });
    });
    event.target.reset();
  }

  return (
    <div>
      {topic.length > 0 && topicUser !== undefined ? (
        <div className='MessagesList '>
          {/* TOPIC POST */}
          <div className='topic-container accent-box-design'>
            <div className='topic-header'>
              <div className='title'>{topic[0].title}</div>
              <div>
                <button className='primary-button'>🤍 Save</button>
                <button className='primary-button'> 🏳️ Report</button>
              </div>
            </div>
            <div className='topic-body'>{topic[0].body}</div>
            <div className='footer'>
              <span className='comment'>💬 {messages.length} Comments</span>
              <span className='topic-creator'>
                Discussion Started on{' '}
                {moment(topic[0].createdAt).format('LLLL')} by {topicUser}
              </span>
            </div>
          </div>
          {/* MESSAGES LIST */}
          <div className='messages-container'>
            <div className='main-body'>
              <div className='message-display'>
                {messages.length > 0 ? (
                  messages.map((message) => {
                    return (
                      <MessageDetails key={message.id} message={message} />
                    );
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
