import { SetStateAction } from 'react';
import { User } from './User';

export interface Context {
  currentUser?: User,
  setUser: SetStateAction<User>,
}