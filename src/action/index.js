import * as t  from 'action/actionTypes';
import * as a from 'api';
import { createImageObject } from 'utils';

export function changeLog(isLogged) {
    return ( { type: t.LOG, isLogged});
}

export function setImageList(query, callback) {
  return dispatch => {
    // a.getImages(query, (success, result, error) => {
    //     if(success) {
    //          dispatch({ type: t.SET_PHOTO_LIST, data: result.data })
    //         callback();
    //     } else {
    //         console.log(error);
    //     }
    //   });
    a.getImages(query)
    .then(data => {
        dispatch({ type: t.SET_PHOTO_LIST, data: data }); 
        callback();
    })
    .catch(e => console.log(e.message));
  }
}

export function uploadPhoto(photoUrl) {
    const newPhoto = createImageObject(photoUrl);
    return { type: t.UPLOAD_PHOTO, newPhoto }
}