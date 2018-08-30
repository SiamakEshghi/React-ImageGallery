import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk'; 
import toJson from 'enzyme-to-json';
import Upload from 'components/Album';

let wrapper, store, parentWrapper;
const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);
const initialState = {img: { imageList: [{id:1, largeImageURL: 'url1'}]}};

beforeEach(() => {
    store = mockStore(initialState);
    parentWrapper = shallow(<Upload store={store}/>);
    wrapper = parentWrapper.dive();
});

afterEach(() => {
    wrapper.unmount();
});


describe('Upload Ui', () => {
    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render an instance of the image when set imagePreviewUrl in state', () => {
        wrapper.setState({ imagePreviewUrl: 'url'});
        wrapper.update();
        expect(wrapper.find('img').length).toEqual(1);
    });
});


describe('Upload Button', () => {
    it('after upload image there is no img', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        wrapper.update();
        setTimeout(() => expect(wrapper.find('img').length).toEqual(0)
        , 1000);
    });
});