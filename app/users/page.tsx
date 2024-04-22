import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";

const UsersPage = () => {
  return (
    <div>
      <h2>Users: </h2>
      <Link href="users/new">New User Page</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </div>
  );
};

export default UsersPage;
