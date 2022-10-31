import {createContext, Dispatch, useEffect, useState} from 'react';
import {User} from 'firebase/auth';
import {createUserDocumentFromAuth, onAuthStateChangeListener} from '../utils/firebase.utils';

export type CurrentUser = User | null;

export interface UserContextProps {
  setCurrentUser: Dispatch<CurrentUser>;
  currentUser: CurrentUser;
}

export const UserContext = createContext<UserContextProps>({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({children}: any) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);
  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user: CurrentUser) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
      return;
    });

    return unsubscribe;
  }, []);

  useEffect(() => {

  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};