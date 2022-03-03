import { Group } from "./Group";
import { User } from "./User";


export interface Recommendation {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  oneline: string;
  url: string;
  image?: string;
  author: User;
  authorId: string;
  categories: string[];
  groups: Group[];
}