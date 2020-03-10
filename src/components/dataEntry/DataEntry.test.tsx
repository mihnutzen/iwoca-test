import React from 'react';
import { shallow } from 'enzyme';
import DataEntry from './DataEntry';

describe('DataEntry component', () => {
  it('Should render correctly', () => {
    const props = {
      label: 'label',
      value: 100,
      unit: '£',
      onChnage: jest.fn(),
      error: 'error'
    };
    const wrapper = shallow(<DataEntry {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger the onchange function', () => {
    const changeFn = jest.fn();
    const props = {
      label: 'label',
      unit: '£',
      onChnage: changeFn
    };
    const wrapper = shallow(<DataEntry {...props} />);
    wrapper.find('input').simulate('change', { target: { value: 100 } });

    expect(changeFn).toHaveBeenCalledWith(100);
  });
});
