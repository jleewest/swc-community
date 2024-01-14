import { useState, useEffect } from 'react';
import { getTopics, postTopic } from './apiServices/topic';
import { sortNewestFirst } from './utils/sortUtil';
import TopicDetails from './TopicDetails';
import './TopicsList.css';
import { Link } from 'react-router-dom';

//FORMAT FOR LIST OF TOPICS

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((data) => {
      setTopics(sortNewestFirst(data));
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const newTopic = {
      title: event.target[0].value,
      body: event.target[1].value,
    };

    postTopic(newTopic).then((data) => {
      setTopics((prev) => {
        return sortNewestFirst([...prev, data]);
      });
    });
    event.target.reset();
  }

  return (
    <div className='TopicsList'>
      <form className='search-bar'>
        <input type='text' placeholder='Search for a topic...' />
        <button type='submit' className='primary-button'>
          Search
        </button>
      </form>
      <div>
        <form
          onSubmit={handleSubmit}
          className='new-topic-form accent-box-design'
        >
          <div className='topic'>
            <div className='main-label'>
              Provide a brief header for your topic{' '}
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
              required
            />
          </div>
          <button type='submit' className='primary-button submit-button'>
            Post new topic
          </button>
        </form>
      </div>
      <div className='topic-display'>
        {topics.length > 0 ? (
          topics.map((topic) => {
            return (
              <Link to={{ pathname: `/messages/${topic.id}` }} key={topic.id}>
                <TopicDetails topic={topic} />
              </Link>
            );
          })
        ) : (
          <p>There are no topics yet</p>
        )}
      </div>
    </div>
  );
}
