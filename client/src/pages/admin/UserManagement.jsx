import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar } from "@mui/material";
import { dashboardData } from "../../constants/sampleData";
import { transformImage } from "../../lib/features";

const columns = [
  {
    feild: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    feild: "avatar",
    headerName: "avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatarf} />
    ),
  },
  {
    feild: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    feild: "Username",
    headerName: "Username",
    headerClassName: "table-header",
    width: 200,
  },
  {
    feild: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    feild: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200,
  },
];
const UserManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.users.map((i) => ({
        ...i,
        id: i._id,
        avatar: transformImage(i.avatar, 50),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
