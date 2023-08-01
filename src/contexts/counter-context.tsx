import React, { createContext, useReducer } from "react";

type Theme = "light" | "dark";

type Counter = "DECREASE" | "RESET" | "INCREASE";

export type CounterContextProps = [AppState, React.Dispatch<AppAction>];

interface Props {
  children: React.ReactNode;
}

interface AppState {
  count: number;
  theme: Theme;
}

interface AppAction {
  type: Counter | "TOGGLE_THEME";
  payload?: number;
}

const reducer = (
  state: AppState,
  { type, payload = 1 }: AppAction
): AppState => {
  switch (type) {
    case "DECREASE":
      return { ...state, count: state.count - payload };
    case "RESET":
      return { ...state, count: 0 };
    case "INCREASE":
      return { ...state, count: state.count + payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const initialState: AppState = { count: 0, theme: "light" };
const initialContext: CounterContextProps = [initialState, () => null];
export const CounterContext =
  createContext<CounterContextProps>(initialContext);

const CounterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const counterContextValue: CounterContextProps = [state, dispatch];

  return (
    <CounterContext.Provider value={counterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
