import { Dispatch, SetStateAction } from 'react';
import { Recommendation } from './Recommendation';
import { User } from './User';

export interface Context {
  currentUser: User,
  currentRecommendations: Recommendation[],
  setRecommendations: Dispatch<SetStateAction<Recommendation[]>>, 
  setUser: Dispatch<SetStateAction<User>>,
}