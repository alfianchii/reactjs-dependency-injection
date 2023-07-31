import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAppContext } from "../hooks/useAppContext";

const ChangeUsername = () => {
  const [{ user }, dispatch] = useAppContext();
  const [newUsername, setNewUsername] = useState<string>("");

  const changeUsernameHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_USER",
      payload: { ...user, username: newUsername },
    });
  };

  return (
    <form onSubmit={changeUsernameHandler} className={`mb-2 mt-3 flex gap-x-2`}>
      <Input
        autoFocus
        defaultValue={user.username}
        placeholder={`Your username ...`}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <Button className={`dark:bg-sky-500`}>Change!</Button>
    </form>
  );
};

export default ChangeUsername;
