import React, { FC, PropsWithChildren } from "react";
import Header from "@/components/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
