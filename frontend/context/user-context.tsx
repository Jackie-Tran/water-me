import React from 'react';

export type User = {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
}

export type UserContextType = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = React.createContext<UserContextType>({
    user: {
        uid: '',
        firstName: '',
        lastName: '',
        email: ''
    },
    setUser: () => {console.warn('no user provider')}
});