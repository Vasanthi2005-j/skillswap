import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [selectedUser, setSelectedUser] =
    useState(null);

  const [coins, setCoins] = useState(100);

  const [teachSkills, setTeachSkills] =
    useState([]);

  const [learnSkills, setLearnSkills] =
    useState([]);

  return (
    <AppContext.Provider
      value={{
        selectedUser,
        setSelectedUser,

        coins,
        setCoins,

        teachSkills,
        setTeachSkills,

        learnSkills,
        setLearnSkills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};