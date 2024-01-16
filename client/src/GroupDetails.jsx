import './GroupDetails.css';

//FORMATS EACH GROUP CARD

export default function GroupDetails(group) {
  return (
    <div className='GroupDetails'>
      <div className='group-details-container accent-box-design'>
        <div>
          <div className='group-details-header'>
            <h2>{group.group.title}</h2>
          </div>
          <div className='image-container'>
            <img src={group.group.img} alt='Group Image' />
          </div>
          <div className='group-details-body'>
            <p>{group.group.body}</p>
          </div>
        </div>
        <div className='submit-button'></div>
      </div>
    </div>
  );
}
