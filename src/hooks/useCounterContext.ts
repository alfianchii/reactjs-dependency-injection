import { useContext } from "react";
import {
  CounterContext as Counter,
  CounterContextProps as Props,
} from "../contexts/counter-context";

export const useCounterContext = (): Props => useContext(Counter);
