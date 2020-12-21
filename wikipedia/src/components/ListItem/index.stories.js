import React from 'react';
import Item from '.';


export default {
  title: 'Components/SearchItem',
  component: Item,  
};

const Template = (args) => <Item {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'https://en.wikipedia.org/wiki/Happy_Fee',
  label: 'Test data for demo'
  
};
