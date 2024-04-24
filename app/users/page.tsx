import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h2>Users: </h2>
      <Link href="users/new" className="btn">
        New User
      </Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
