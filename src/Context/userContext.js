import { createContext } from "react";

export const UserContext = createContext({
  user_data: null,
  latest_attendance: []
});