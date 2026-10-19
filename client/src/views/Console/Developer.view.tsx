import React, { useState } from "react";
import UserTableDeveloper from "../components/General/UserTableDeveloper.component";
import { api } from "../../lib/api";

const Developer = () => {
  const [jsonData, setJsonData] = useState([]);
  React.useEffect(() => {
    async function getUsersDB() {
      // Superadmin only
      const jsonData = await api("/admin/concurenti");
      if (jsonData.status !== "ok") {
        window.location.replace("/");
        return;
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
