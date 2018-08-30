import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import moxios from 'moxios';
import { BASE_URL } from 'config/constants';
import Album from 'components/Album';

let store;
const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);
const initialState = {
    img: { imageList: [{id:1, largeImageURL: 'url1'}]}, 
    auth: { isLogged: false }
};
beforeEach(() => {
    moxios.install();
    moxios.stubRequest(BASE_URL, {
        status: 200,
        response: {data: {
            hits:  [{id: 1, largeImageURL: 'url'}, {id: 2, largeImageURL: 'url2'}]
            }
        }
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of image and display them', () => {
    store = mockStore(initialState);
    const wrapper = mount(
        <Provider store={store}>
                <Album />
        </Provider>
    );
    wrapper.find('.searchBtn').simulate('click');
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('img').length).toEqual(2); 
        wrapped.unmount();
    });
});