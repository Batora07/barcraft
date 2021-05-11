import { Meteor } from 'meteor/meteor';

import { LinksCollection } from '/imports/api/links';
import { createDummyUsers } from '../imports/api/Helpers/helpers';
import { dummyUsers } from '../imports/api/Helpers/Users';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  const numberOfUsers:number = Meteor.users.find().count();
  if(numberOfUsers === 0){
    console.log("Il n'y a pas d'utilisateurs");
    createDummyUsers(dummyUsers);
  }  
  else {
    console.log("Il y a des utilisateurs");
  }
});
