import './GroupsList.css';

//FORMAT FOR LIST OF ALL GROUPS

export default function GroupsList() {
  return (
    <div className='GroupsList'>
      {/* MENU BAR */}
      <div className='groups-menu-bar'>
        <div>
          <form className='search-bar'>
            <input type='text' placeholder='Search for a group...' />
            <button type='submit' className='primary-button'>
              Search
            </button>
          </form>
        </div>
        <div>
          <button className='primary-button new-group-button'>
            Request new group
          </button>
        </div>
      </div>
    </div>
  );
}
