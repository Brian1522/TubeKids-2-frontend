import { createSlice } from '@reduxjs/toolkit';

const playListSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlists: [],
    message: null,
    loading: true,
  },
  reducers: {
    getSuccessfullPlaylist: (state, action) => {
        state.playlists = action.payload.playlist;
        state.message = null;
        state.loading = false;
     },
    getErrorPlaylist: (state, action) => {
      state.playlists = [];
      state.message = null;
      state.loading = false;
   }
  },
});

export const {
  getSuccessfullPlaylist , 
  getErrorPlaylist
} = playListSlice.actions;

export default playListSlice.reducer;
