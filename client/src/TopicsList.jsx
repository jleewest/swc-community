import { useState, useEffect } from 'react';
import { getTopicsById, postTopic } from './apiServices/topic';
import { getGroupById } from './apiServices/group';
import { sortNewestFirst } from './utils/sortUtil';
import TopicDetails from './TopicDetails';
import './TopicsList.css';
import { Link, useParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

//FORMAT FOR LIST OF TOPICS

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [groupTitle, setGroupTitle] = useState('');
  const groupId = useParams();
  const { user } = useUser();

  //get topics for group
  useEffect(() => {
    getTopicsById(groupId.id).then((data) => {
      setTopics(sortNewestFirst(data));
    });
  }, [groupId]);

  //get group title
  useEffect(() => {
    getGroupById(groupId.id).then((data) => {
      setGroupTitle(data.title);
    });
  }, [groupId]);

  //post new topic
  function handleSubmit(event) {
    event.preventDefault();
    const newTopic = {
      title: event.target[0].value,
      body: event.target[1].value,
      GroupId: groupId.id,
      UserClerkId: user.id,
    };

    postTopic(newTopic).then((data) => {
      setTopics((prev) => {
        return sortNewestFirst([...prev, data]);
      });
    });
    event.target.reset();
  }

  return (
    <div>
      {groupTitle !== undefined ? (
        <div className='TopicsList'>
          <div className='like-button'>
            <button className='primary-button '>🤍 Add to Home</button>
          </div>
          <div className='display-header accent-box-design'>{groupTitle} </div>
          {/* NEW TOPIC FORM */}
          <form
            onSubmit={handleSubmit}
            className='new-topic-form accent-box-design'
          >
            <div className='topic'>
              <div className='main-label'>
                Provide a brief header for your topic
              </div>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='Enter topic header...'
                required
              />
            </div>
            <div className='body'>
              <div className='main-label'>Topic details </div>
              <textarea
                type='textarea'
                name='body'
                id='body'
                placeholder='What is on your mind?'
                rows='8'
                required
              />
            </div>
            <button type='submit' className='primary-button submit-button'>
              Post new topic
            </button>
          </form>
          {/* SEARCH BAR */}
          <form className='search-bar'>
            <input type='text' placeholder='Search for a topic...' />
            <button type='submit' className='primary-button'>
              Search
            </button>
          </form>
          {/* TOPICS CONTAINER */}
          <div className='topic-display'>
            {topics.length > 0 ? (
              topics.map((topic) => {
                return (
                  <Link
                    to={{ pathname: `/messages/${groupId.id}/${topic.id}` }}
                    key={topic.id}
                  >
                    <TopicDetails topic={topic} />
                  </Link>
                );
              })
            ) : (
              <p className='no-posts'>There are no topics yet</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
