import Link from "next/link";
import React from "react";

const UsersPage = () => {
  return (
    <div>
      <h2>Users Page</h2>
      <Link href="users/new">New User Page</Link>
    </div>
  );
};

export default UsersPage;
