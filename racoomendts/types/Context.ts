import { Dispatch, SetStateAction } from 'react';
import { Recommendation } from './Recommendation';
import { User } from './User';
import { Group } from './Group';

export interface Context {
  currentUser: User,
  currentRecommendations: Recommendation[],
  currentGroups: Group[],
  setRecommendations: Dispatch<SetStateAction<Recommendation[]>>, 
  setUser: Dispatch<SetStateAction<User>>,
  setGroups: Dispatch<SetStateAction<Group[]>>,
}