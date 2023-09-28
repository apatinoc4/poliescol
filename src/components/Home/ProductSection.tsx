import React from "react";
import SidePanelView from "@/components/SidePanelView";

const SECTION_INFO = {
  buttonLabel: "Conoce nuestro catálogo completo",
  coverImg: "productSectionCover.png",
  panelImg: "productSectionBg.jpeg",
  title: "Un producto para cada necesidad",
  text: "Tenemos diferentes tipos de productos con alta calidad y rendimiento",
};

const ProductSection = () => {
  const { buttonLabel, coverImg, panelImg, title, text } = SECTION_INFO;
  return (
    <section>
      <SidePanelView
        buttonLabel={buttonLabel}
        coverImg={coverImg}
        panelImg={panelImg}
        text={text}
        title={title}
        variant="left"
      />
    </section>
  );
};

export default ProductSection;
