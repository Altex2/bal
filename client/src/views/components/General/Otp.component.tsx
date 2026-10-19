import React, { useEffect, useState } from "react";
import bg_image from "../../../assets/img/Background/colaj.jpg";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import { UserServicePostgresql as serverFunction } from "@genezio-sdk/bbetti";
import BgButton from "../../../assets/img/items/bara-vot.webp";

const OtpComp = () => {
  const [user, setUser] = useState({
    email: localStorage.getItem("email") || "",
    token: "",
  });

  const [error, setError] = useState(
    "Codul de verificare a fost trimis pe email!"
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSummit = async (event: any) => {
    event.preventDefault();

    const status = await serverFunction.emailConfirmation(user.token);

    if (status.status === "ok") {
      localStorage.setItem("email", status.user?.email!);
      localStorage.setItem("token", status.token!);
      window.location.replace("/");
    } else {
      setError(`${status.errorMessage}`);
    }
  };

  const resendEmail = async (event: any) => {
    const status = await serverFunction.resendEmailConfirmation(user.email);

    if (status.status == "ok") {
      setError("Codul de verificare a fost trimis!");
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
          <form className="bg-black/90 p-6 px-4 md:p-10 md:px-24">
            <h1 className="text-white text-center mb-10">
              {error ? error : ""}
            </h1>
            <label className="mb-4">
              <div className="my-5 md:my-5 flex">
                <AiOutlineMail color="white" className="text-3xl md:text-4xl" />
                <input
                  name="email"
                  value={user.email || ""}
                  type="text"
                  placeholder="Email"
                  className="bg-transparent border-b-2 text-lg md:text-2xl text-white ml-4"
                  onChange={handleChange}
                />
              </div>
            </label>
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

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-white" />
                <p className="text-white text-sm">Remember Me</p>
              </label>
              <button onClick={resendEmail} className="text-white text-sm">
                Resend Email Code?
              </button>
            </div>

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
};

export default OtpComp;
