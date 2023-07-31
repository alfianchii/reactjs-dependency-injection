import DisplayTheme from "./DisplayTheme";
import ToggleTheme from "./ToggleTheme";

const Theme = () => {
  return (
    <>
      <section className={`flex flex-col items-center justify-center`}>
        <div className={`mt-4`}>
          <DisplayTheme />
        </div>
        <div className={`-mb-2 mt-3`}>
          <ToggleTheme />
        </div>
      </section>
    </>
  );
};

export default Theme;
