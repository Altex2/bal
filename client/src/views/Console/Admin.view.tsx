import React, { useState } from "react";
import UserTableAdmin from "../components/General/UserTable.component";
import { api } from "../../lib/api";

const Admin = () => {
  const [jsonData, setJsonData] = useState([]);
  const [adminType, setAdminType] = useState("");

  React.useEffect(() => {
    async function getUsersDB() {
      // 401 without a session, 403 without the admin role
      const jsonData = await api("/admin/users");
      if (jsonData.status !== "ok") {
        window.location.replace("/");
        return;
      }

      setAdminType(jsonData.adminType);
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
