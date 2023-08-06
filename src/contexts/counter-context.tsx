import React, { createContext, useReducer } from "react";
import { setItemWithExp, getItemWithExp } from "../helpers/localstorage";

type Theme = "light" | "dark";

type Counter =
  | "DECREASE"
  | "RESET"
  | "INCREASE"
  | "SET_DECREASE"
  | "SET_INCREASE";

export type CounterContextProps = [AppState, React.Dispatch<AppAction>];

interface Props {
  children: React.ReactNode;
}

interface Count {
  value: number;
  decrease: number;
  increase: number;
}

interface AppState {
  count: Count;
  theme: Theme;
}

interface AppAction {
  type: Counter | "TOGGLE_THEME";
  payload?: Count;
}

const reducer = (
  state: AppState,
  { type, payload = initialState.count }: AppAction
): AppState => {
  switch (type) {
    case "DECREASE":
      return {
        ...state,
        count: {
          ...state.count,
          value: state.count.value - state.count.decrease,
        },
      };
    case "RESET":
      return { ...state, count: { ...state.count, value: 0 } };
    case "INCREASE":
      return {
        ...state,
        count: {
          ...state.count,
          value: state.count.value + state.count.increase,
        },
      };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DECREASE":
      setItemWithExp("COUNTER", {
        ...state,
        count: { ...state.count, decrease: payload.decrease },
      });
      return { ...getItemWithExp("COUNTER") };
    case "SET_INCREASE":
      setItemWithExp("COUNTER", {
        ...state,
        count: { ...state.count, increase: payload.increase },
      });
      return { ...getItemWithExp("COUNTER") };
    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};

const initialState: AppState = {
  count: getItemWithExp("COUNTER").count ?? {
    value: 0,
    decrease: 1,
    increase: 1,
  },
  theme: "light",
};
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
