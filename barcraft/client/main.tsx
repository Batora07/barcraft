import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDom from 'react-dom';
import App from '../imports/ui/components/App';

Meteor.startup(() => {
  ReactDom.render(<App />, document.getElementById('root'));
});
