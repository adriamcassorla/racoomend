import { Recommendation } from "./Recommendation";
import { Group } from "./Group";

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;     
  firstname: string;  
  lastname: string;        
  image: string | null;           
  groups?: Group[];        
  Recommendations?: Recommendation[];
}