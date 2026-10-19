import React, { useEffect, useState } from "react";
import UserTableDeveloper from "../components/General/UserTableDeveloper.component";
import { UserServicePostgresql } from "@genezio-sdk/bbetti";

const Developer = () => {
  const [jsonData, setJsonData] = useState([]);
  React.useEffect(() => {
    async function getUsersDB() {
      if (!window.localStorage.getItem("token")) {
        window.location.replace("/");
      }
      const jsonData = await UserServicePostgresql.getConcurenti(
        window.localStorage.getItem("token")!
      );
      if (jsonData.status !== "ok") {
        window.location.replace("/");
      }
      setJsonData(jsonData.concurenti);
    }

    getUsersDB();
  }, []);

  return (
    <>
      <UserTableDeveloper data={jsonData} />
    </>
  );
};

export default Developer;
