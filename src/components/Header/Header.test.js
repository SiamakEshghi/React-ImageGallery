import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Header from 'components/Header';

let wrapper, store, parentWrapper;
const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);
const initialState = {
    img: { imageList: [{id:1, largeImageURL: 'url1'}]}, 
    auth: { isLogged: false }
};


beforeEach(() => {
    store = mockStore(initialState);
    parentWrapper = shallow(<Header store={store} /> );
    wrapper = parentWrapper.dive();
});

describe('Header UI', () => {

    it('should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check isLogged Prop matches to isLogged initialState', () => {
        expect(parentWrapper.find('Header').prop('isLogged')).toEqual(initialState.auth.isLogged)
    });
});

describe('Login Button', () => {
    beforeEach(() => {
        wrapper.find('.loadingBtn').simulate('click');
        wrapper.update();
    });

    it('login button change Header isLogged Prop ', () => {
        setTimeout(() => expect(parentWrapper.find('Header').prop('isLogged')).toEqual(true),
        200);
    });

    it('login button change button lable ', () => {
        setTimeout(() => expect(wrapper.find('.loadingBtn').text()).toEqual('Logout'),
        200);
    });
    
});
