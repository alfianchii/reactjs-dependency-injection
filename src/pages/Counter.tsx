import { useEffect } from "react";
import Button from "../components/Button";
import CounterTheme from "../components/CounterTheme";
import { useCounterContext } from "../hooks/useCounterContext";

const Counter = () => {
  useEffect(() => {
    document.title = "Counter";
  }, []);

  const [state, dispatch] = useCounterContext();

  const decreaseHandler = () => dispatch({ type: "DECREASE", payload: 5 });
  const resetHandler = () => dispatch({ type: "RESET" });
  const increaseHandler = () => dispatch({ type: "INCREASE", payload: 10 });

  return (
    <section className={`mt-10`}>
      <div className={`mb-3`}>
        <div
          style={{ height: 120 }}
          className={`border-b pb-5 transition-colors duration-300 dark:border-b-slate-600`}
        >
          <div>
            <h1
              className={`text-xl font-medium tracking-tight text-black transition-all duration-300 dark:text-white`}
            >
              Counter w/ Reducer
            </h1>
            <p className={`text-sm`}>Count: {state.count}</p>
          </div>

          <div className={`mt-3 flex gap-x-3 `}>
            <Button onClick={decreaseHandler} color={`bg-red-500`}>
              Decrease
            </Button>
            <Button onClick={resetHandler} color={`bg-gray-500`}>
              Reset
            </Button>
            <Button onClick={increaseHandler} color={`bg-green-500`}>
              Increase
            </Button>
          </div>
        </div>
        <CounterTheme />
      </div>
    </section>
  );
};

export default Counter;
