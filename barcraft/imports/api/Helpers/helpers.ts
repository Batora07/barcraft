import { User } from '../Models/User';
import { Accounts } from 'meteor/accounts-base';

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