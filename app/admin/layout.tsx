import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-400 p-3 mr-3">Admin Layout Aside</aside>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
