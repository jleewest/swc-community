import './NewGroupForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { postGroup } from './apiServices/group';
import img from './img/book.jpg';

//POST A NEW GROUP

export default function NewGroupForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const newGroup = {
      title: event.target[0].value,
      body: event.target[1].value,
      img: event.target[2].value,
    };

    postGroup(newGroup).then(navigate('/groups'));
  }

  return (
    <div className='NewGroupForm'>
      <div className='form-container accent-box-design'>
        <div className='return-button'>
          <Link to='/groups'>
            <button className='primary-button'>X</button>
          </Link>
        </div>
        {/* NEW TOPIC FORM */}
        <form onSubmit={handleSubmit} className='new-group-form'>
          <div className='group'>
            <div className='image-container'>
              <div className='img'></div>
              <img src={img} alt='Group Image' />
            </div>
            <div className='main-label'>What is the name of your group?</div>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Enter group name...'
              required
            />
          </div>
          <div className='body'>
            <div className='main-label'>Group details </div>
            <textarea
              type='textarea'
              name='body'
              id='body'
              placeholder='Provide a clear and concise description of the purpose of this group'
              rows='8'
              required
            />
          </div>
          <div className='main-label'>
            Choose the cover photo for your group
          </div>
          <input
            type='text'
            name='img'
            id='img'
            placeholder='Enter the url for your photo...'
            required
          />
          <div className='submit-button'>
            <button type='submit' className='primary-button'>
              Add new group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
