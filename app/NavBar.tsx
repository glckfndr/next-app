import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="flex bg-slate-200">
      <Link href="/" className="mr-5 ml-5">
        {" "}
        Next.js{" "}
      </Link>
      <Link href="/users"> Users </Link>
    </div>
  );
}

export default NavBar;
