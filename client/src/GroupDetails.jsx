import './GroupDetails.css';

//FORMATS EACH GROUP CARD

export default function GroupDetails(group) {
  return (
    <div className='GroupDetails'>
      <div className='group-details-container accent-box-design'>
        <div>
          <div className='image-container'>
            <img src={group.group.img} alt='Group Image' />
          </div>
          <div className='group-details-body'>
            <h2>{group.group.title}</h2>
            <p>{group.group.body}</p>
          </div>
        </div>
        <div className='submit-button'>
          <button className='primary-button'>🤍 Add to Home</button>
        </div>
      </div>
    </div>
  );
}
