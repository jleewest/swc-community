import { CREATE_TOPIC, UPDATE_TOPIC, DELETE_TOPIC } from './topicsConstants';

export function addTopic(title, body) {
  return {
    type: CREATE_POST,
    payload: { title, body },
  };
}
