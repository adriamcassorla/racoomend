import { User } from "next-auth";
import { createContext, SetStateAction } from "react";
import { Context } from "../types/Context";
const setUser = {} as SetStateAction<User>
const CurrentUserContext = createContext({});

export default CurrentUserContext;