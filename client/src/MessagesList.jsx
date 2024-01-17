import { useParams } from 'react-router-dom';
import { getTopicsById } from './apiServices/topic';
import {
  postMessage,
  getMessagesByTopicId,
  deleteMessage,
} from './apiServices/message';
import { getUserByClerkId } from './apiServices/user';
import { getGroupById } from './apiServices/group';
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
  const [groupTitle, setGroupTitle] = useState('');
  const params = useParams();
  const { user } = useUser();

  //get group title
  useEffect(() => {
    getGroupById(params.groupId).then((data) => {
      setGroupTitle(data.title);
    });
  }, [params]);

  //set topic of message
  useEffect(() => {
    const filterTopics = async () => {
      const getTopics = await getTopicsById(params.groupId);
      const filteredTopics = getTopics.filter((group) => {
        return group.id === Number(params.topicId);
      });
      setTopic(filteredTopics);
    };
    filterTopics();
  }, [params]);

  //set messages for topic
  useEffect(() => {
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

  //delete comment
  function deleteComment(message) {
    deleteMessage(message).then(() => {
      const newMessages = messages.filter(
        (prevMessage) => prevMessage.id !== message
      );
      setMessages(newMessages);
    });
  }

  return (
    <div>
      {topic.length > 0 &&
      topicUser !== undefined &&
      groupTitle !== undefined ? (
        <div className='MessagesList '>
          <div className='display-header accent-box-design'>{groupTitle}</div>
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
                      <MessageDetails
                        key={message.id}
                        message={message}
                        deleteComment={deleteComment}
                      />
                    );
                  })
                ) : (
                  <p className='no-posts'>There are no comments yet...</p>
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
