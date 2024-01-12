import { useState, useEffect } from 'react';
import { getTopics, postTopic } from './apiService';
import sortTopics from './utils/sortUtil';
import TopicDetails from './TopicDetails';
import './TopicsList.css';

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((data) => {
      setTopics(sortTopics(data));
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    const newTopic = {
      title: event.target[0].value,
      body: event.target[1].value,
    };

    postTopic(newTopic).then((data) => {
      setTopics((prev) => {
        return sortTopics([...prev, data]);
      });
    });
    event.target.reset();
  }

  return (
    <div className='TopicsList'>
      <div>
        <form className='search'>
          <input type='text' placeholder='Search for a topic...' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit} className='new-topic-form'>
          <div>
            <div className='main-label'>
              Provide a brief header for your topic{' '}
            </div>
            <div className='support-label'>
              Example: Favorite writing tool, Creating a table of contents,
              etc...{' '}
            </div>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Enter topic header...'
              required
            />
          </div>
          <div>
            <div className='main-label'>Topic details </div>
            <div className='support-label'>
              Example: ask questions, share resources, etc...{' '}
            </div>
            <textarea
              type='textarea'
              name='body'
              id='body'
              placeholder='What is on your mind?'
              required
            />
          </div>
          <button type='submit'>Start new topic</button>
        </form>
      </div>
      <div className='topic-display'>
        {topics.length > 0 ? (
          topics.map((topic) => {
            return <TopicDetails key={topic.id} topic={topic} />;
          })
        ) : (
          <p>There are no topics yet</p>
        )}
      </div>
    </div>
  );
}
