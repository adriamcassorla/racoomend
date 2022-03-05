import { Recommendation } from "./Recommendation";
import { User } from "./User";

export interface Group {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  users?: User[];
  recommendations?: Recommendation[]
}