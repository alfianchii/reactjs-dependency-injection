import Theme from "../components/Theme";
import { useAppContext } from "../hooks/useAppContext";

const Home = () => {
  const [
    {
      user: { username, avatar },
    },
  ] = useAppContext();
  return (
    <section className={`mt-10`}>
      <div className={`mb-3`}>
        <div
          style={{ height: 120 }}
          className={`flex items-center justify-between border-b pb-5 transition-colors duration-300 dark:border-b-slate-600`}
        >
          <div>
            <h1
              className={`text-xl font-medium tracking-tight text-black transition-all duration-300 dark:text-white`}
            >
              Home
            </h1>
            <p className={`text-sm`}>Welcome back, {username}!</p>
          </div>
          <div>
            <img
              width={100}
              height={100}
              src={avatar}
              alt="Avatar"
              className={`rounded-lg`}
            />
          </div>
        </div>
        <Theme />
      </div>
    </section>
  );
};

export default Home;
