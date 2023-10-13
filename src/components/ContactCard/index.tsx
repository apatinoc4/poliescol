import React from "react";
import styles from "./contactCard.module.scss";
import Button from "@/components/Button";
import CustomIcon from "@/components/Icons";
import Link from "next/link";

interface ContactCardProps {
  specialist?: boolean;
  name: string;
  phone: string;
  field2: string;
}

const formatPhone = (phone: string) =>
  phone.replace(/\s+/g, "").replace(/^\+/, "");

const ContactCard = ({ phone, field2, name, specialist }: ContactCardProps) => {
  return (
    <div className={styles.container}>
      <h6>{name}</h6>
      <div className={styles.infoField}>
        <CustomIcon icon="filledPhone" />
        <p>{phone}</p>
      </div>
      <div className={styles.infoField}>
        <CustomIcon icon={specialist ? "mail" : "mapPin"} />
        <p>{field2}</p>
      </div>
      <Link href={`https://wa.me/${formatPhone(phone)}`} target="_blank">
        <Button padding="sm" variant="red-body" label="Contactar" />
      </Link>
    </div>
  );
};

export default ContactCard;
