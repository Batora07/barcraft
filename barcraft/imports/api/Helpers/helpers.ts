import { User } from '../Models/User';
import { Accounts } from 'meteor/accounts-base';

/** 
 * This fucntion will create dummy users if the database is empty at the start of Barcraft
 * */
export const createDummyUsers = (users:User[]):void => {
    users.forEach(
        user => {
            const {username, profile, password} = user;
            Accounts.createUser({
                username,
                password,
                profile
            });
        }
    );
}