import { SetStateAction } from 'react';
import { Recommendation } from './Recommendation';
import { User } from './User';

export interface Context {
  currentUser?: User,
  recommendations?: Recommendation[],
  setRecommendations: Function, // Why does this cause trouble? SetStateAction<Recommendation[]>, 
  setUser: Function,
}