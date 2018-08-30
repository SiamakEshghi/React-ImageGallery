import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from 'components/App';
import Header from 'components/Header';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('Should render correctly', () =>{
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('App shpuld Show a Header', () => {
  expect(wrapper.find(Header).length).toEqual(1);
});