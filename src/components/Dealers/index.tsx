import React from "react";
import styles from "./dealersSection.module.scss";
import ExpandableField from "../ExpandableField";
import ContactCard from "@/components/ContactCard";
import { DEALERS } from "constants/dealers";
import Image from "next/image";

const DealersSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.backgroundImg}>
        <Image
          alt="dealersSectionBg.jpeg"
          fill
          src="/dealersSectionBg.jpeg"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.contents}>
        {DEALERS.map(({ id, cityName, dealers }) => {
          return (
            <ExpandableField key={id} variant title={cityName}>
              {dealers.map(({ name, phone, address }, idx) => {
                return (
                  <ContactCard
                    key={`${id}-${idx}`}
                    phone={phone}
                    field2={address}
                    name={name}
                  />
                );
              })}
            </ExpandableField>
          );
        })}
      </div>
    </section>
  );
};

export default DealersSection;
