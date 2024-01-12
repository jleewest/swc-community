import { useState, useEffect } from 'react';
import { getTopics, postTopic } from './apiService';
//import { sortTopics } from './utils/sortUtil';

export default function TopicsList() {
  //const [topics, setTopics] = useState([]);
  //useEffect(() => {
  //  getTopics().then((data) => {
  //    setTopics(sortTopics(data));
  //  });
  //}, []);

  //function handleSubmit(event) {
  //  event.preventDefault();
  //  const newTopic = {
  //    title: event.target.title.value,
  //    body: event.target.date.value,
  //  };

  //  postTopic(newTopic).then((data) => {
  //    setTopics((prev) => {
  //      return sortTopics([...prev, data]);
  //    });
  //  });
  //  event.target.reset();
  //}

  return (
    <div className='TopicsList'>
      <form action=''>
        <input type='text' placeholder='Search for a topic...' />
        <button type='submit'>Search</button>
      </form>
      <form action=''>
        <div>Provide a brief header for your topic </div>
        <div>
          Example: Favorite writing tool, Creating a table of contents, etc...{' '}
        </div>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Enter topic header...'
          required
        />
        <div>Topic details </div>
        <div>Example: ask questions, share resources, etc... </div>
        <input
          type='text'
          name='body'
          id='body'
          placeholder='What is on your mind?'
          required
        />
        <button>Start new topic</button>
      </form>
      {/*<div className='topic-display'>
        {topics.length > 0 ? (
          topics.map((topic) => {
            return <TopicDetails key={topic._id} topic={topic} />;
          })
        ) : (
          <p>There are no topics yet</p>
        )}
      </div>*/}
    </div>
  );
}
