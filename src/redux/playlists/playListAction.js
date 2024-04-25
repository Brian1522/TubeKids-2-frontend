// authActions.js

import { getSuccessfullPlaylist,  getErrorPlaylist, addVideosSuccessful, addVideosError, deleteVideoSuccessful, deleteVideoError } from './playListReducer';
import clientAxios from '../../config/axios';

//metodo que comunica con el metodo de back end de obtener playlist
export const  getPlayList  = (user) => async (dispatch) => {
    try {
        const response = await clientAxios.get(`api/playlist/${user.user.uid}`);
        dispatch(getSuccessfullPlaylist(response.data));
    } catch (error) {
        console.log(error);
        dispatch(getErrorPlaylist(error));
    }
    
};
//metodo que comunica con el metodo de back end de agregar videos al playlist
export const  addVideos  = (playlist) => async (dispatch) => {
    const videos = {"videos":playlist.videos }
    try {
        const response = await clientAxios.put(`api/playlist/${playlist._id}`,videos);
        dispatch(addVideosSuccessful(response.data));
    } catch (error) {
        console.log(error);
        dispatch(addVideosError(error));
    }
    
};

export const deleteVideo = (playlistId, videoId) => async (dispatch) => {
    try {
      // Cuerpo de la solicitud con el videoId
      const body = {
        videoId: videoId
      };
  
      // Realiza la solicitud DELETE al endpoint correspondiente con el ID de la playlist y el cuerpo de la solicitud
     const response =  await clientAxios.delete(`api/playlist/${playlistId}`, { data: body });
      // Si la solicitud se completa correctamente, puedes enviar una acción para actualizar el estado del Redux store si es necesario
      dispatch(deleteVideoSuccessful(response.data));
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.log(error);
      dispatch(deleteVideoError(error));
    }
  };
  

