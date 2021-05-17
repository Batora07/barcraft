import { Meteor } from 'meteor/meteor';

import { LinksCollection } from '/imports/api/links';
import { createDummyUsers } from '../imports/api/Helpers/helpers';
import { dummyUsers } from '../imports/api/Helpers/Users';
import { ServiceConfiguration } from 'meteor/service-configuration';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {


  ServiceConfiguration.configurations.remove({
    service: 'twitter'
  });

  ServiceConfiguration.configurations.remove({
    service: 'facebook'
  });

  ServiceConfiguration.configurations.remove({
    service: 'google'
  });

/// SETUP SOCIAL LINKS cf : https://guide.meteor.com/security.html#api-keys-oauth && https://guide.meteor.com/accounts.html#supported-login-services
// setup facebook
  ServiceConfiguration.configurations.upsert(
    { service: 'facebook' },
    {
      $set: {
        loginStyle: "popup",
        appId: Meteor.settings.facebook.appId,
        secret: Meteor.settings.facebook.secret
      }
    }
  );
// setup Twitter
  ServiceConfiguration.configurations.upsert(
    { service: 'twitter' },
    {
      $set: {
        loginStyle: "popup",
        consumerKey: Meteor.settings.twitter.consumerKey,
        secret: Meteor.settings.twitter.secret
      }
    }
  );
// setup google
  ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
      $set: {
        loginStyle: "popup",
        clientId: Meteor.settings.google.clientId,
        secret: Meteor.settings.google.secret
      }
    }
  );

  const numberOfUsers:number = Meteor.users.find().count();
  if(numberOfUsers === 0){
    console.log("Il n'y a pas d'utilisateurs");
    createDummyUsers(dummyUsers);
  }  
  else {
    console.log("Il y a des utilisateurs");
  }
});
