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
          <h1 className={`text-xl`}>Profile</h1>
          <p className={`font-thin`}>Username: {username}</p>
        </div>
        <div className={`mt-4`}>
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
