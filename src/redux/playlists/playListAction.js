// authActions.js

import { getSuccessfullPlaylist,  getErrorPlaylist } from './playListReducer';
import clientAxios from '../../config/axios';


export const  getPlayList  = (user) => async (dispatch) => {
    try {
        const response = await clientAxios.get(`api/playlist/${user.user.uid}`);
        dispatch(getSuccessfullPlaylist(response.data));
    } catch (error) {
        console.log(error);
        dispatch(getErrorPlaylist(error));
    }
    
};
