import React from 'react';

import { SearchBar } from './SearchBar';

export default {
  title: 'Example Search Bar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const SampleSearchBar = Template.bind({});
SampleSearchBar.args = {
  placeholder: "input search text text ...", 
};
