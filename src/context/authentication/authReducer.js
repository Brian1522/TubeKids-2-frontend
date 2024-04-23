import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    authenticated: false,
    user: null,
    message: null,
    loading: true,
  },
  reducers: {

    successfullRegister: (state, action) => {
        localStorage.setItem('token', action.payload.token);
        state.authenticated = true;
        state.message = null;
        state.loading = false;
     },
     loginSuccessful: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.authenticated = true;
      state.message = null;
      state.loading = false;
    },
    getUser: (state, action) => {
      state.authenticated = true;
      state.user = action.payload;
      state.loading = false;
    },
    signOff: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.authenticated = false;
      state.message = action.payload;
      state.loading = false;
    },
    loginError: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.authenticated = false;
      state.message = action.payload;
      state.loading = false;
    },
    logError: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.authenticated = false;
      state.message = action.payload;
      state.loading = false;
    },

    logOut: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.authenticated = false;
      state.message = action.payload;
      state.loading = false;
    }
  },
});

export const {
    successfullRegister,
    loginSuccessful,
    logError,
    getUser,
    signOff,
    loginError,
    logOut
} = authSlice.actions;

export default authSlice.reducer;