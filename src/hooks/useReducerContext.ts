import { useContext } from "react";
import {
  ReducerContext as Reducer,
  ReducerContextProps as Props,
} from "../contexts/reducer-context";

export const useReducerContext = (): Props => useContext(Reducer);
