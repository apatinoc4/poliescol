"use client";

import React, { ReactElement } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import CustomIcon from "@/components/Icons";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";

const NAV_SECTIONS = [
  {
    id: "about",
    label: "Sobre nosotros",
    linkTo: "/nosotros",
  },
  {
    id: "products",
    label: "Nuestros Productos",
    linkTo: "/productos",
  },
  {
    id: "dealers",
    label: "Distribuidores",
    linkTo: "/distribuidores",
  },
  {
    id: "blogs",
    label: "Blogs",
    linkTo: "/blog",
  },
  {
    id: "advisors",
    label: "Miembros",
    linkTo: "/asesores",
  },
];

const BurgerIcon = (): ReactElement => <CustomIcon icon="burgerMenu" />;

IconButton;

const getActivePathName = (pathName: string, currentPathname: string) =>
  pathName === currentPathname;

const Header = () => {
  const currentPathname = usePathname();

  return (
    <nav className={styles.navBar}>
      <Link className="" href={"/"}>
        <Image
          alt="poliescolHeader.png"
          height={42}
          src="/poliescolHeader.png"
          width={112}
        />
      </Link>
      <ul>
        {NAV_SECTIONS.map(({ id, label, linkTo }) => {
          return (
            <Link href={linkTo} key={id}>
              <li
                className={clsx({
                  [styles.active]: getActivePathName(linkTo, currentPathname),
                })}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>
      <IconButton className={styles.menuButton}>
        <SvgIcon component={BurgerIcon} />
      </IconButton>
    </nav>
  );
};

export default Header;
