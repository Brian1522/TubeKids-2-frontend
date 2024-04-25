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
      state.playlists = action.payload.playlist[0];
      state.message = null;
      state.loading = false;
    },
    getErrorPlaylist: (state, action) => {
      state.playlists = [];
      state.message = null;
      state.loading = false;
    },
    addVideosSuccessful: (state, action) => {
      state.playlists = action.payload.playlist;
      state.message = null;
      state.loading = false;
    },
    addVideosError: (state, action) => {
      state.playlists = [];
      state.message = action.payload;
      state.loading = false;
    },

    deleteVideoSuccessful: (state, action) => {
      state.playlists = action.payload.playlist;
      state.message = null;
      state.loading = false;
    },

    deleteVideoError: (state, action) => {
      state.playlists = [];
      state.message = action.payload;
      state.loading = false;

    }

  },
});

export const {
  getSuccessfullPlaylist,
  getErrorPlaylist,
  addVideosSuccessful,
  addVideosError,
  deleteVideoSuccessful,
  deleteVideoError
} = playListSlice.actions;

export default playListSlice.reducer;
