import * as t from 'action/actionTypes';
import imagereducer from 'reducer/ImageReducer';

describe('Handle action Image reducer', () => {
    
    it('handle action of type SET_PHOTO_LIST', () => {
        const INITIAL_STATE = {
            imageList: []
        };
        const action = {
            type: t.SET_PHOTO_LIST,
            data: { hits: [{id: 1, largeImageURL: 'url'}, {id: 2, largeImageURL: 'url2'}] }
        }    

        const newState = imagereducer(INITIAL_STATE, action);
        expect(newState).toEqual({
                imageList :
                [{id: 1, largeImageURL: 'url'}, 
                {id: 2, largeImageURL: 'url2'}]
            });
    });

    it('handle action of type UPLOAD_PHOTO', () => {
        const INITIAL_STATE = {
            imageList: 
            [{id: 1, largeImageURL: 'url'}, 
            {id: 2, largeImageURL: 'url2'}]
        };

        const action = {
            type: t.UPLOAD_PHOTO,
            newPhoto: {id: 3, largeImageURL: 'url3', myPhoto: true}
        }
        const newState = imagereducer(INITIAL_STATE, action);

        expect(newState).toEqual({
            imageList:
            [{id: 1, largeImageURL: 'url'}, 
            {id: 2, largeImageURL: 'url2'},
            {id: 3, largeImageURL: 'url3', myPhoto: true}]
        });
    });
});