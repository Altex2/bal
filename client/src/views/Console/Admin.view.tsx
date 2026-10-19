import React, { useEffect, useState } from "react";
import UserTableAdmin from "../components/General/UserTable.component";
import { UserServicePostgresql } from "@genezio-sdk/bbetti";

const Admin = () => {
  const [jsonData, setJsonData] = useState([]);
  const [adminType, setAdminType] = useState("");

  React.useEffect(() => {
    async function getUsersDB() {
      if (!window.localStorage.getItem("token")) {
        window.location.replace("/");
      }
      const jsonData = await UserServicePostgresql.getUsers(
        window.localStorage.getItem("token")!
      );
      if (jsonData.status !== "ok") {
        window.location.replace("/");
      }

      const adminType = await UserServicePostgresql.isAdmin(
        window.localStorage.getItem("token")!
      );

      if (adminType.status !== "ok") {
        window.location.replace("/");
      }

      setAdminType(adminType.admin);

      setJsonData(jsonData.users);
    }

    getUsersDB();
  }, []);

  return (
    <>
      <UserTableAdmin data={jsonData} adminType={adminType} />
    </>
  );
};

export default Admin;
