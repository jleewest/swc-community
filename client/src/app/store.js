import { configureStore } from '@reduxjs/toolkit';

//import topicsReducer from '../features/topics/topicSlice';

export const store = configureStore({
  reducer: {
    //topics: topicsReducer,
  },
});
