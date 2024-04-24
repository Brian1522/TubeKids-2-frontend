import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; // Importa persistReducer
import storage from 'redux-persist/lib/storage';
import authReducer from '../redux/authentication/authReducer';
import playListReducer from "../redux/playlists/playListReducer";

// Configuración de persistencia para el reducer de autenticación
const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

// Configuración de persistencia para el reducer de playlists
const playListPersistConfig = {
  key: "playlist",
  storage: storage,
};

export const store = configureStore({
  reducer: {
    authentication: persistReducer(authPersistConfig, authReducer),
    playlists: persistReducer(playListPersistConfig, playListReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);