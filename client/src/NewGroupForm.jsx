import './NewGroupForm.css';
import { Link } from 'react-router-dom';

//FILL-FORM TO START A NEW GROUP

export default function NewGroupForm() {
  return (
    <div className='NewGroupForm'>
      <div className='form-container accent-box-design'>
        <div className='return-button'>
          <Link to='/groups'>
            <button className='primary-button'>X</button>
          </Link>
        </div>
        {/* NEW TOPIC FORM */}
        <form className='new-group-form'>
          <div className='group'>
            <div className='image-container'>
              <img
                src='https://images.photowall.com/products/84847/incredible-fantasy-world.jpg?h=699&q=85'
                alt='Group Image'
              />
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
          <div className='submit-button'>
            <button type='submit' className='primary-button'>
              Add new group
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}
