import { Profile } from './Profile';

export interface User {
    _id?: string;
    username?: string;
    password?: string;    
    profile?: Profile;
}