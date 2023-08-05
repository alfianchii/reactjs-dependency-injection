import React, { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAppContext } from "../hooks/useAppContext";

const ChangeUsername = () => {
  const [{ user }, dispatch] = useAppContext();
  const [message, setMessage] = useState<string>("");
  const changeUsernameRef = useRef<HTMLInputElement>(null);
  const profileElement = document.getElementById("profile");
  const usernameElement = profileElement?.firstElementChild?.lastElementChild;

  // Style
  const applyMessage = (msg: string = message, height: string = "120px") => {
    setTimeout(() => {
      setMessage(msg);
      profileElement!.style!.height = height;
    }, 150);
  };

  const changeUsernameHandler = (event: React.FormEvent) => {
    event.preventDefault();
    usernameElement?.classList.add("opacity-0");

    // Validates input
    const value: string = changeUsernameRef.current?.value || "";
    if (!value) return applyMessage("Name couldn't be empty!", "140px");

    // Set username
    applyMessage("");
    setTimeout(() => {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          ...user,
          username: value,
        },
      });

      usernameElement?.classList.remove("opacity-0");
    }, 300);
  };

  return (
    <form onSubmit={changeUsernameHandler}>
      <div className={`mb-2 mt-3 flex gap-x-2`}>
        <Input
          ref={changeUsernameRef}
          autoFocus
          defaultValue={user.username}
          placeholder={`Your username ...`}
        />
        <Button className={`dark:bg-sky-500`}>Change!</Button>
      </div>
      <div className={`text-red-500 transition-all duration-300`}>
        {message}
      </div>
    </form>
  );
};

export default ChangeUsername;
