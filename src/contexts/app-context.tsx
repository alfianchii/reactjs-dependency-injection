import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  username: string;
  avatar: string;
}

export interface AppContextProps {
  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const initialStateUser: UserProps = {
  username: "",
  avatar: "",
};

const initialContext: AppContextProps = {
  user: {
    username: "",
    avatar: "",
  },
  setUser: (user: React.SetStateAction<UserProps>) => user,
  theme: "light",
  setTheme: (theme: React.SetStateAction<Theme>) => theme,
};

export const AppContext = createContext<AppContextProps>(initialContext);

const AppProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserProps>(initialStateUser);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const data: UserProps = {
      username: "alfianchii",
      avatar: "/src/assets/earl-phantomhive-1.jpg",
    };
    setUser(data);
  }, []);

  const appContextValue: AppContextProps = {
    user,
    setUser,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
