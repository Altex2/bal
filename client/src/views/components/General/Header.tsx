import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { UserServicePostgresql as serverFunction } from "@genezio-sdk/bbetti";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const CheckSS = async () => {
      if (!token) return;

      const auth = await serverFunction.checkSession(token || "null");
      if (auth.status == "ok") {
        setIsAuth(true);
      }

      const admin = await serverFunction.isAdmin(token || "null");
      if (admin.status == "ok") {
        setIsAdmin(admin.admin);
      }
    };

    CheckSS();
  }, []);

  const handleLogOut = () => {
    window.localStorage.clear();
  };

  return (
    <>
      <div className=" fixed top-0 z-10  rounded-div flex items-center justify-between h-20 font-bold w-full bg-black/90 text-white md:px-8">
        <a href="/">
          <h1 className="text-2xl uppercase pl-2 select-none">
            Balul Bobocilor
          </h1>
        </a>
        <div className=" hidden md:block">
          <a
            href="/"
            className=" p-4 duration-300 hover:text-[#d9d9d9d9] no-underline"
          >
            {" "}
            Acasă
          </a>
          <a
            href="/concurenti"
            className=" p-4 duration-300 hover:text-[#d9d9d9d9] no-underline"
          >
            {" "}
            Concurenți
          </a>
          {isAdmin === "admin" || isAdmin === "superadmin" ? (
            <a
              href="/admin-console"
              className=" no-underline duration-300 hover:text-[#d9d9d9d9] px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
            >
              {" "}
              Admin
            </a>
          ) : null}

          {isAdmin === "superadmin" ? (
            <a
              href="/super-admin-console"
              className=" no-underline duration-300 hover:text-[#d9d9d9d9] px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
            >
              {" "}
              SuperAdmin
            </a>
          ) : null}

          {!window.localStorage.getItem("token") ? (
            <a
              href="/login"
              className=" no-underline duration-300 hover:text-[#d9d9d9d9] px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
            >
              {" "}
              Autentificare
            </a>
          ) : (
            <a
              href="/"
              onClick={handleLogOut}
              className=" no-underline duration-300 hover:text-[#d9d9d9d9] px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
            >
              {" "}
              Logout
            </a>
          )}
        </div>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer z-10 pr-4"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed right-0 top-20 flex flex-col items-center justify-between w-full h-fit border-b-2 border-l-2 border-t-2 bg-black ease-in duration-500 z-10 "
              : "fixed right-[-100%] w-full top-20 h-fit flex flex-col items-center justify-between ease-in duration-500"
          }
        >
          <ul className="w-full p-4 ">
            <li className=" py-6 border-b">
              <a href="/">Acasă</a>
            </li>
            <li className=" py-6 border-b">
              <a href="/concurenti">Concurenți</a>
            </li>
            {isAdmin === "admin" || isAdmin === "superadmin" ? (
              <li className=" py-6 border-b">
                <a href="/admin-console">Admin</a>
              </li>
            ) : null}

            {isAdmin === "superadmin" ? (
              <li className=" py-6 border-b">
                <a href="/super-admin-console">SuperAdmin</a>
              </li>
            ) : null}

            {!window.localStorage.getItem("token") ? (
              <li className=" py-6 border-b">
                <a href="/login">Autentificare</a>
              </li>
            ) : (
              <li className=" py-6 border-b">
                <a href="/" onClick={handleLogOut}>
                  Deconectare
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

<li className=" py-6 border-b">
  <a href="/login">Autentificare</a>
</li>;
