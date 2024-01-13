import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function NewTopic({ handleSubmit }) {
  const [topic, setTopic] = useSState('');

  const topics = useSelector((state) => state.topics);

  function handleSubmit(event) {
    event.preventDefault();

    dispatchEvent(addTopic(topic));
    setTopic('');
    //const newTopic = {
    //  title: event.target[0].value,
    //  body: event.target[1].value,
    //};

    //postTopic(newTopic).then((data) => {
    //  setTopics((prev) => {
    //    return sortTopics([...prev, data]);
    //  });
    //});
    //event.target.reset();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='new-topic-form accent-box-design'
      >
        <div>
          <div className='main-label'>
            Provide a brief header for your topic{' '}
          </div>
          <div className='support-label'>
            Example: Favorite writing tool, Creating a table of contents, etc...{' '}
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
        <button type='submit' className='primary-button'>
          Start new topic
        </button>
      </form>
    </div>
  );
}
