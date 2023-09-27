import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";

const NAV_SECTIONS = [
  {
    id: "about",
    label: "Sobre nosotros",
    linkTo: "/test",
  },
  {
    id: "products",
    label: "Nuestros Productos",
    linkTo: "/test",
  },
  {
    id: "dealers",
    label: "Distribuidores",
    linkTo: "/test",
  },
  {
    id: "blogs",
    label: "Blogs",
    linkTo: "/test",
  },
  {
    id: "crew",
    label: "Miembros",
    linkTo: "/test",
  },
];

const Header = () => {
  return (
    <nav className={styles.navBar}>
      <Image
        alt="poliescolHeader.png"
        height={42}
        src="/poliescolHeader.png"
        width={112}
      />
      <ul>
        {NAV_SECTIONS.map(({ id, label, linkTo }) => {
          return <li key={id}>{label}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Header;
