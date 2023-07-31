import ChangeUsername from "../components/ChangeUsername";
import Theme from "../components/Theme";
import { useAppContext } from "../hooks/useAppContext";

const Profile = () => {
  const [
    {
      user: { username },
    },
  ] = useAppContext();
  return (
    <section className={`mt-10`}>
      <div className={`mb-3`}>
        <div
          style={{ height: 120 }}
          className={`ransition-colors border-b pb-5 duration-300 dark:border-b-slate-600`}
        >
          <div>
            <h1
              className={`text-xl font-medium tracking-tight text-black transition-all duration-300 dark:text-white`}
            >
              Profile
            </h1>
            <p className={`text-sm`}>Username: {username}</p>
          </div>
          <div
            className={`mt-2 transition-colors duration-300 dark:border-b-slate-600`}
          >
            <ChangeUsername />
          </div>
        </div>
        <Theme />
      </div>
    </section>
  );
};

export default Profile;
