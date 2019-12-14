import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

// @see https://github.com/bambielli/testing-react-component-methods
// @see https://bambielli.com/til/2018-03-04-directly-test-react-component-methods/

describe('directly invoking the "incrementCounter" method off of component instance', () => {
  it('should update the count by 1 when invoked by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const expectedNewState = {
      persons: [
        {name:"Oleg",job:"EUR",date: 19/2/1989,gender: "Male",employed:"yes",mates:["Maxim", "Kristina"]},
        {name:"Maxim",job:"developer",date:12/3/2000,gender: "Male", employed:"no", mates:["Liam","Derek"]} ,
        {name:"newPeter",job:"developer",date: 25/9/1999,gender: "Male", employed:"no",mates:["Derek"]},
        {name:"Derek",job: "developer",date:30/12/1997,gender: "Male",employed:"yes",mates:[]},
      ],
      selectedIndex:2,
      newPerson:{name:"",job: "",date: 19/2/1989,gender: "",employed:"",mates:[]}
    };
    instance.handleInputChange();
    expect(wrapper.state()).toBe(expectedNewState);
  });
 /* it('Ещё один тест', () => {
    const wrapper = shallow(<Home />);
    const instance = wrapper.instance();
    expect(wrapper.state('counter')).toBe(0);
    instance.incrementCounter();
    expect(wrapper.state('counter')).toBe(1);
  }); */
});


/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/