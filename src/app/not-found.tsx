import styles from "./notFound.module.scss";
import Header from "@/components/Header";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <Image
        alt="faqsHeaderBg.jpeg"
        className={styles.backgroundImage}
        fill
        sizes="100%"
        src="/faqsHeaderBg.jpeg"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.tlBackground}></div>
      <div className={styles.contents}>
        <h1>404</h1>
        <p>Ups... no hemos podido encontrar la página</p>
      </div>
    </div>
  );
}
