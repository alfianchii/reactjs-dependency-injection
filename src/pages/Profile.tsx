import ChangeUsername from "../components/ChangeUsername";
import DisplayTheme from "../components/DisplayTheme";
import { useAppContext } from "../hooks/useAppContext";

const Profile = () => {
  const {
    user: { username },
  } = useAppContext();
  return (
    <section className={`mt-10`}>
      <div className={`mb-1`}>
        <div className={`flex flex-col`}>
          <h1
            className={`text-xl font-medium tracking-tight text-black transition-all duration-300 dark:text-white`}
          >
            Profile
          </h1>
          <p className={`text-sm`}>Username: {username}</p>
        </div>
        <div
          className={`mt-4 border-b pb-5 transition-colors duration-300 dark:border-b-slate-600`}
        >
          <ChangeUsername />
        </div>
        <div className={`mt-4`}>
          <DisplayTheme />
        </div>
      </div>
    </section>
  );
};

export default Profile;
