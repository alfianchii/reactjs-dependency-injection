import { useEffect } from "react";
import CounterTheme from "../components/CounterTheme";
import Input from "../components/Input";
import { useCounterContext } from "../hooks/useCounterContext";

const CounterSetting = () => {
  const [state, dispatch] = useCounterContext();

  useEffect(() => {
    document.title = "Counter Settings";
  }, []);

  const changeDecreaseHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!parseInt(event.target.value))
      return (event.target.value = `${state.count.decrease}`);

    dispatch({
      type: "SET_DECREASE",
      payload: {
        ...state.count,
        decrease: parseInt(event.target.value),
      },
    });
  };

  const changeIncreaseHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!parseInt(event.target.value))
      return (event.target.value = `${state.count.increase}`);

    dispatch({
      type: "SET_INCREASE",
      payload: {
        ...state.count,
        increase: parseInt(event.target.value),
      },
    });
  };

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
              Counter Settings
            </h1>
            <p className={`text-sm`}>Setting up your counter values.</p>
          </div>

          <div className={`mt-3 flex gap-x-3 `}>
            <div>
              <Input
                autoFocus
                type="number"
                value={state.count.decrease}
                onChange={changeDecreaseHandler}
                className={`focus:border-red-600 focus:ring-red-200 dark:focus:border-rose-200 dark:focus:ring dark:focus:ring-rose-600`}
              />
            </div>
            <div>
              <Input
                type="number"
                value={state.count.increase}
                onChange={changeIncreaseHandler}
                className={`focus:border-green-600 focus:ring-green-200 dark:focus:border-emerald-200 dark:focus:ring dark:focus:ring-emerald-600`}
              />
            </div>
          </div>
        </div>
        <CounterTheme />
      </div>
    </section>
  );
};

export default CounterSetting;
