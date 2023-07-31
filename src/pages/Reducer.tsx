import Button from "../components/Button";
import { useReducerContext } from "../hooks/useReducerContext";

const Reducer = () => {
  const [state, dispatch] = useReducerContext();
  const body = document.documentElement;

  state.theme === "dark" ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? body.setAttribute("data-mode", "dark")
    : body.removeAttribute("data-mode");

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
              Reducer
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
        <section className={`flex flex-col items-center justify-center`}>
          <div className={`mt-4`}>
            <p className={`font-medium`}>
              <span className={`font-bold`}>
                App theme ({state.theme === "light" ? "🌞" : "🌙"}):
              </span>
              {` ${state.theme}`}
            </p>
          </div>
          <div className={`-mb-2 mt-3`}>
            <div className={`flex items-center justify-center gap-x-2`}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--system-uicons"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 21 21"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                      opacity=".3"
                    ></path>
                    <g transform="translate(-210 -1)">
                      <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                      <circle cx="220.5" cy="11.5" r="4"></circle>
                      <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="relative cursor-pointer rounded-full bg-gray-200 shadow-sm">
                <input
                  aria-label="toggle 1"
                  type="checkbox"
                  name="toggle"
                  id="toggle1"
                  checked={state.theme === "light" ? false : true}
                  onKeyDown={(e) =>
                    e.key === "Enter" && dispatch({ type: "TOGGLE_THEME" })
                  }
                  onChange={() => dispatch({ type: "TOGGLE_THEME" })}
                  className="absolute bottom-0 top-0 m-auto h-6 w-6 cursor-pointer appearance-none rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-700 checked:right-0 checked:bg-indigo-700 focus:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                />
                <label
                  htmlFor="toggle1"
                  className="block h-4 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300 checked:bg-indigo-700 dark:bg-gray-700"
                ></label>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Reducer;