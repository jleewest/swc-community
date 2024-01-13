import { CREATE_TOPIC, UPDATE_TOPIC, DELETE_TOPIC } from './topicsConstants';
import { postTopic } from '../../apiService';

const initialState = [];

export default function topicsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST: function (state,action){
      postTopic(state);
    }
    default:
      return state;
  }
}
