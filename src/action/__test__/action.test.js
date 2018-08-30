import { uploadPhoto, changeLog } from 'action';
import * as t from 'action/actionTypes';

describe('uploadPhoto', () => {
    it('has the correct type', () => {
        const action = uploadPhoto();
        expect(action.type).toEqual(t.UPLOAD_PHOTO);
    });
    it('has the correct payload', () => {
        const action = uploadPhoto('Url');
        expect(action.newPhoto.largeImageURL).toEqual('Url');
    });
});

describe('changeLog', () => {
    it('has the correct type', () => {
        const action = changeLog();
        expect(action.type).toEqual(t.LOG);
    });
    it('has the correct payload', () => {
        const action = changeLog(false);
        expect(action.isLogged).toEqual(false);
    });
});