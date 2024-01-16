import { useState, useEffect } from 'react';
import { getTopicsById, postTopic } from './apiServices/topic';
import { getGroupById } from './apiServices/group';
import {
  postGroupToUser,
  getGroupsByClerkId,
  deleteGroupFromUser,
} from './apiServices/user-group';
import { sortNewestFirst } from './utils/sortUtil';
import TopicDetails from './TopicDetails';
import './TopicsList.css';
import { Link, useParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

//FORMAT FOR LIST OF TOPICS

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [groupTitle, setGroupTitle] = useState('');
  const [pairUserWithGroup, setPairUserWithGroup] = useState({});
  const [toggleButton, setToggleButton] = useState('');
  const [isActive, setIsActive] = useState(false);
  const groupId = useParams();
  const { user } = useUser();

  //get group title
  useEffect(() => {
    getGroupById(groupId.id).then((data) => {
      setGroupTitle(data.title);
    });
  }, [groupId]);

  //get topics for group
  useEffect(() => {
    getTopicsById(groupId.id).then((data) => {
      setTopics(sortNewestFirst(data));
    });
  }, [groupId]);

  //set pairUserWithGroup
  useEffect(() => {
    const newUserGroup = {
      ClerkId: user.id,
      GroupId: groupId.id,
    };
    setPairUserWithGroup(newUserGroup);
  }, []);

  //check if pairUserWithGroup matches existing UserGroup and set respective 'active' state
  useEffect(() => {
    const setFollowStatus = async () => {
      await getGroupsByClerkId(user.id).then((userGroupPair) => {
        if (
          userGroupPair.some((group) => {
            return group.GroupId === Number(groupId.id);
          })
        ) {
          setIsActive(true);
          setToggleButton('🤍 Following!');
          console.log('true -- user is already following');
          return;
        } else {
          setIsActive(false);
          setToggleButton('🤍 Add to Home');
          console.log('false -- not currently following');
          return;
        }
      });
    };
    setFollowStatus();
  }, [user]);

  //post new topic
  function handleSubmit(event) {
    event.preventDefault();
    const newTopic = {
      title: event.target[0].value,
      body: event.target[1].value,
      GroupId: groupId.id,
      UserClerkId: user.id,
    };
    postTopic(newTopic).then((data) => {
      setTopics((prev) => {
        return sortNewestFirst([...prev, data]);
      });
    });
    event.target.reset();
  }

  //toggle user-group link
  async function handleClick() {
    if (isActive === true) {
      console.log('unfollow');
      setToggleButton('🤍 Add to Home');
      await deleteGroupFromUser(pairUserWithGroup);
    } else {
      console.log('follow');
      setToggleButton('🤍 Following!');
      await postGroupToUser(pairUserWithGroup);
    }
    console.log('🦖', isActive);
    setIsActive((prevState) => !prevState);
  }

  return (
    <div>
      {groupTitle !== undefined && setToggleButton.length > 0 ? (
        <div className='TopicsList'>
          <div className='like-button'>
            <button onClick={handleClick} className='primary-button'>
              {toggleButton}
            </button>
          </div>
          <div className='display-header accent-box-design'>{groupTitle} </div>
          {/* NEW TOPIC FORM */}
          <form
            onSubmit={handleSubmit}
            className='new-topic-form accent-box-design'
          >
            <div className='topic'>
              <div className='main-label'>
                Provide a brief header for your topic
              </div>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='Enter topic header...'
                required
              />
            </div>
            <div className='list-body'>
              <div className='main-label'>Topic details </div>
              <textarea
                type='textarea'
                name='body'
                id='body'
                placeholder='What is on your mind?'
                rows='8'
                required
              />
            </div>
            <button type='submit' className='primary-button submit-button'>
              Post new topic
            </button>
          </form>
          {/* SEARCH BAR */}
          <form className='search-bar'>
            <input type='text' placeholder='Search for a topic...' />
            <button type='submit' className='primary-button'>
              Search
            </button>
          </form>
          {/* TOPICS CONTAINER */}
          <div className='topic-display'>
            {topics.length > 0 ? (
              topics.map((topic) => {
                return (
                  <Link
                    to={{ pathname: `/messages/${groupId.id}/${topic.id}` }}
                    key={topic.id}
                  >
                    <TopicDetails topic={topic} />
                  </Link>
                );
              })
            ) : (
              <p className='no-posts'>There are no topics yet</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
