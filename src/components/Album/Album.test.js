import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Album from 'components/Album';

let wrapper, store, parentWrapper;
const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);
const initialState = {img: { imageList: [{id:1, largeImageURL: 'url1'}]} };


beforeEach(() => {
    store = mockStore(initialState);
    parentWrapper = shallow(<Album store={store} /> );
    wrapper = parentWrapper.dive();
});

afterEach(() => {
    wrapper.unmount();
});

describe('Album UI', () => {

    it('should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should show 1 form, 1 input, 1 button, 1 select', () => {
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('button').length).toEqual(1);
        expect(wrapper.find('select').length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(1);
    });
    

    it('check Prop matches with initialState', () => {
        expect(parentWrapper.find('Album').prop('imageList')).toEqual(initialState.img.imageList)
    });

    it('should render an instance of the img component for each index of imageList', () => {
        const imageList = [
            {id: 2, largeImageURL: 'Url2'}, 
            {id: 3, largeImageURL: 'Url3'}
        ]
        wrapper.setProps({imageList});
        expect(wrapper.find('img').length).toEqual(2);
    });
});

describe('The Search Area', () => {
    beforeEach(() => {
        wrapper.find('input').simulate('change', {
            target: { value: 'new search'}
        });
        wrapper.update();
    });

    it('has a input that user can type in', () => {
        expect(wrapper.find('input').prop('value')).toEqual('new search');
    })
    
    it('after submitting the input is completly empty', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        wrapper.update();
        setTimeout(() => expect(wrapper.find('input').prop('value')).toEqual('')
        , 1000);
    });
});

describe('Select', () => {
    const imageList = [
        {id: 2, largeImageURL: 'Url2', myPhoto: true},
        {id: 2, largeImageURL: 'Url2'}, 
        {id: 3, largeImageURL: 'Url3'}
    ]
    beforeEach(() => {
        wrapper.setProps({imageList});
    });

    it('after selct Pixabay Images', () => {
        wrapper.find('select').simulate('change', {
            target: { value: 'online' }
        });
        expect(wrapper.find('img').length).toEqual(2);
    });
    
    it('after selct Uploaded Images', () => {
        wrapper.find('select').simulate('change', {
            target: { value: 'upload' }
        });
        expect(wrapper.find('img').length).toEqual(1);
    });
    it('after selct Filter Images', () => {
        wrapper.find('select').simulate('change', {
            target: { value: 'all' }
        });
        expect(wrapper.find('img').length).toEqual(3);
    });
});



