import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReadyState, ConnectionState, Message } from './types';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE: ConnectionState = {
  status: ReadyState.CLOSED,
  uuid: uuidv4(),
  messageHistory: [],
  roomId: 'Main',
};

export default createSlice({
  name: 'connection',
  initialState: INITIAL_STATE,
  reducers: {
    statusChanged: (state, action: PayloadAction<ReadyState>) => {
      state.status = action.payload;
    },
    messageReceived: (state, action: PayloadAction<Message>) => {
      state.messageHistory.push(action.payload);
    },
  },
  extraReducers: {

  },
});
