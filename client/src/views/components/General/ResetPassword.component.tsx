import React, { useState } from "react";
import bg_image from "../../../assets/img/Background/colaj.jpg";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import { UserServicePostgresql as serverFunction } from "@genezio-sdk/bbetti";
import BgButton from "../../../assets/img/items/bara-vot.webp";

export default function ResetPasswordComp() {
  const [user, setUser] = useState({
    token: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSummit = async (event: any) => {
    event.preventDefault();

    const status = await serverFunction.resetPasswordConfirmation(
      user.token,
      user.password
    );

    if (status.status == "ok") {
      window.localStorage.setItem("token", user.token);
      window.location.replace("/login");
    } else {
      setError(`${status.errorMessage}`);
    }
  };

  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div>
          <h1 className="text-white text-center">{error ? error : ""}</h1>
          <form className="bg-black/90 p-6 px-4 md:p-10 md:px-24">
            <label className="mb-4">
              <div className="my-5 md:my-5 flex">
                <AiOutlineMail color="white" className="text-3xl md:text-4xl" />
                <input
                  name="token"
                  value={user.token}
                  type="text"
                  placeholder="Verification Code"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>
            <label className="mb-6">
              <div className="my-5 md:my-5 flex">
                <AiFillLock color="white" className="text-3xl md:text-4xl" />
                <input
                  name="password"
                  value={user.password}
                  type="password"
                  placeholder="Password"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>
            <div className="flex items-center justify-between mb-6"></div>
            <div
              className="bg-cover duration-300 rounded-lg text-center scale-125 mt-9"
              style={{ backgroundImage: `url(${BgButton})` }}
              onClick={handleSummit}
            >
              <h1 className="text-base text-white scale-75 md:text-base xl:text-xl">
                Confirm
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
