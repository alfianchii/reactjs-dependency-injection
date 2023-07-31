import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAppContext } from "../hooks/useAppContext";

const ChangeUsername = () => {
  const { user, setUser } = useAppContext();
  const [newUsername, setNewUsername] = useState<string>("");

  const changeUsernameHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setUser({ ...user, username: newUsername });
  };

  return (
    <form onSubmit={changeUsernameHandler} className={`flex gap-x-2`}>
      <Input
        autoFocus
        defaultValue={user.username}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <Button>Change!</Button>
    </form>
  );
};

export default ChangeUsername;
