import DisplayTheme from "../components/DisplayTheme";
import ToggleTheme from "../components/ToggleTheme";
import { useAppContext } from "../hooks/useAppContext";

const Home = () => {
  const { user } = useAppContext();
  return (
    <section className={`mt-10`}>
      <div className={`mb-3`}>
        <div className={`flex items-center justify-between border-b pb-5`}>
          <div>
            <h1 className={`text-xl`}>Home</h1>
            <p className={`font-thin`}>Welcome back, {user.username}!</p>
          </div>
          <div>
            <img src={user.avatar} alt="Avatar" className={`rounded-lg`} />
          </div>
        </div>
        <div className={`mt-4`}>
          <DisplayTheme />
        </div>
        <div className={`-mb-2 mt-3`}>
          <ToggleTheme />
        </div>
      </div>
    </section>
  );
};

export default Home;
