import React from "react";
import SidePanelView from "@/components/SidePanelView";

const SECTION_INFO = {
  buttonLabel: "Ver lista de asesores",
  coverImg: "contactSectionCover.jpeg",
  panelImg: "contactSectionBg.jpeg",
  title: "Ponte en contacto con asesores",
  text: "Contamos con asesoría específica para ti en diferentes ciudades del país. Contacta a un asesor para recibir ayuda personalizada",
};

const ContactAdviserSection = () => {
  const { buttonLabel, coverImg, panelImg, title, text } = SECTION_INFO;
  return (
    <section>
      <SidePanelView
        buttonLabel={buttonLabel}
        coverImg={coverImg}
        panelImg={panelImg}
        text={text}
        title={title}
        variant="right"
        linkTo="/asesores"
      />
    </section>
  );
};

export default ContactAdviserSection;
