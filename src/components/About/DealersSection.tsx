import React from "react";
import SidePanelView from "@/components/SidePanelView";

const SECTION_INFO = {
  buttonLabel: "Ver lista de asesores",
  coverImg: "aboutUsDealerBg.jpeg",
  panelImg: "contactSectionBg.jpeg",
  title: "Trabajamos con distribuidores",
  text: "Contamos con asesoría específica para ti en diferentes ciudades del país. Contacta a un asesor para recibir ayuda personalizada",
};

const DealersSection = () => {
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
        linkTo="/distribuidores"
      />
    </section>
  );
};

export default DealersSection;
