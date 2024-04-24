"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <h3>New User</h3>
      <Link href="/" className="btn btn-secondary mb-3">
        Home Page
      </Link>
      <br />
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
