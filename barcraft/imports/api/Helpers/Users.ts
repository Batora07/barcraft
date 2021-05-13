import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User } from "../Models/User"

/**
 * List of dummy users that will fill mango database in case barcraft users's db is empty
 */
export const dummyUsers:User[] = 
[
    {
        _id: '0',
        username: 'Battler Ushiromiya',
        password: "password",
        profile: {
            mail: 'lions.of.azeroth.fr@gmail.com',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise Barcraft !"
        }
    },
    {
        _id: '1',
        username: 'Kinzo Ushiromiya',
        password: "password1",
        profile: {
            mail: 'lions.of.azeroth.fr@gmail.com',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise Barcraft !"
        }
    }
];

/**
 * Methods on Users that can be used either server/client side 
 */
Meteor.methods({
    'user.login' : function({username, mail, password}){
        let userExist: boolean;
        const user:User = Accounts.findUserByUsername(username);
        // opposite of null is true, opposite of true is false => ! ! null ;) 
        userExist = !!user;
        if(userExist){
            // Log in the user
            console.log('User Exist', user);
            return true;
        }
        else {
            // Create new user
            console.log('User don\'t exist');
            return Accounts.createUser({
                username,
                password,
                profile: {
                    mail,
                    actu: "Salut, j'utilise Barcraft !",
                    picture: "https://t3.ftcdn.net/jpg/01/09/00/64/240_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
                }
            });
        }
    }
});