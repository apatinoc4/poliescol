import React, { FC, PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

Footer;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
