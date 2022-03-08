import { createContext, SetStateAction } from "react";
import { Context } from "../types/Context";
const CurrentUserContext = createContext<Partial<Context>>({});
// AppContextInterface
// Context | null
export default CurrentUserContext;