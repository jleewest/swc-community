export default function NewTopic({ handleSubmit }) {
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
