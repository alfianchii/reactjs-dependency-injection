import React, { useEffect, useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAppContext } from "../hooks/useAppContext";

const ChangeUsername = () => {
  const [{ user }, dispatch] = useAppContext();
  const changeUsernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    changeUsernameRef.current!.value = user.username;
  }, [user]);

  const changeUsernameHandler = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch({
      type: "UPDATE_USER",
      payload: {
        ...user,
        username: changeUsernameRef.current!.value,
      },
    });
  };

  return (
    <form onSubmit={changeUsernameHandler} className={`mb-2 mt-3 flex gap-x-2`}>
      <Input
        ref={changeUsernameRef}
        autoFocus
        placeholder={`Your username ...`}
      />
      <Button className={`dark:bg-sky-500`}>Change!</Button>
    </form>
  );
};

export default ChangeUsername;
