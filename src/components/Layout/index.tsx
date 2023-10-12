import React, { FC, PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageThemeProvider from "context/PageThemeProvider";
import styles from "./layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageThemeProvider>
      <header>
        <Header />
      </header>

      <main className={styles.main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </PageThemeProvider>
  );
};

export default Layout;
