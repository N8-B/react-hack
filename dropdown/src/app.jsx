var React = require('react');
var Dropdown = require('./dropdown');

var options = {
title: 'Choose a dessert', // What is shown on the button to open/close it
items: [ // List of items that appear in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Cheesecake'
  ]
};

var element = React.createElement(Dropdown, options);

React.render(element, document.querySelector('.container'));
