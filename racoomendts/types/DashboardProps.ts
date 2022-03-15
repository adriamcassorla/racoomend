import {User} from './User'
import {Recommendation} from './Recommendation'
import {Group} from './Group'

type DashboardProps = {
  user: User;
  recommendations: Recommendation[];
  groups: Group[];
};

export default DashboardProps;