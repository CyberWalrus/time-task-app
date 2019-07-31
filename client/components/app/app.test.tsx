import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './app';

configure({ adapter: new EnzymeAdapter() });

test('App test render', (): void => {
  const checkbox = shallow(<App />);

  expect(checkbox).toMatchSnapshot();
});
