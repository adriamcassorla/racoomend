import { createContext } from "react";
import { Context } from "../types/Context";

const CurrentUserContext = createContext<Partial<Context>>({});
export default CurrentUserContext;