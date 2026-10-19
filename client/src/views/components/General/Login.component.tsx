import React, { useState } from "react";
import bg_image from "../../../assets/img/Background/colaj.jpg";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import { authClient, authErrorMessage } from "../../../lib/auth-client";
import BgButton from "../../../assets/img/items/bara-vot.webp";

export default function LoginComp() {
  const [user, setUser] = useState({
    email: localStorage.getItem("email") || "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleForgot = async (event: any) => {
    event.preventDefault();
    window.location.replace("/resetpasswordconfirm");
  };

  const handleSummit = async (event: any) => {
    event.preventDefault();

    const { error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (!error) {
      localStorage.setItem("email", user.email);
      window.location.replace("/");
    } else if (error.code === "EMAIL_NOT_VERIFIED") {
      // Better Auth has just emailed a new code (sendOnSignIn)
      localStorage.setItem("email", user.email);
      window.location.replace("/otp");
    } else setError(authErrorMessage(error));
  };

  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div>
          <form className="bg-black/90 p-6 px-4 md:p-10 md:px-24">
            <h1 className="text-white text-center mb-10">
              {error ? error : ""}
            </h1>
            <label className="mb-4">
              <div className="my-5 md:my-5 flex">
                <AiOutlineMail color="white" className="text-3xl md:text-4xl" />
                <input
                  name="email"
                  value={user.email}
                  type="text"
                  placeholder="Email"
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
            <div className="flex items-center justify-between mb-6 mt-10">
              <a
                href="/register"
                className="text-white text-sm"
                style={{ cursor: "pointer" }}
              >
                Register
              </a>
              <div
                onClick={handleForgot}
                className="text-white text-sm"
                style={{ cursor: "pointer" }}
              >
                Forgot Password?
              </div>
            </div>
            <div
              className="bg-cover duration-300 rounded-lg text-center scale-125 mt-9"
              style={{ backgroundImage: `url(${BgButton})` }}
              onClick={handleSummit}
            >
              <h1
                className="text-base text-white scale-75 md:text-base xl:text-xl"
                style={{ cursor: "pointer" }}
              >
                Login
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
