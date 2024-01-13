import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { normalize, schema } from 'normalize';
import { getTopics } from '../../apiService';

const topicEntity = new schema.Entity('user');

export const fetchTopics = createAsyncThunk('topics/fetchAll', async () => {
  const response = await getTopics.fetchAll();
  //const normalized = normalize(response.date, [userEntity]);
  //return normalized.entities;
  return response.data;
});

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    loading: 'idle',
    topics: [],
  },
  reducers: {
    createTopic(state) {
      const { text } = actions;
      return [{ text }];
    },
    updateTopic(state, action) {},
    deleteTopic(state, action) {},
    topicsLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    topicsReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.users = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state, action) => {
        state.status - 'loading';
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        const newEntries = {};
        action.payload.forEach((topic) => {
          newEntries[topic.id] = topic;
        });
        state.entities = newEntities;
        state.status - 'idle';
        //state.entities = action.payload.topics;
        //state.ids = Object.keys(action.payload.topics);
      });
  },
});

const { actions, reducer } = topicsSlice;

export const {
  createTopic,
  updateTopic,
  deleteTopic,
  topicsLoading,
  topicsReceived,
} = actions;

const fetchTopics = () => async (dispatch) => {
  dispatch(topicsLoading());
  const response = await getTopics.fetchAll();
  dispatch(usersReceived(response.data));
};

export default reducer;
