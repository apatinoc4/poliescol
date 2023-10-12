import IntroSection from "@/components/About/IntroSection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import DealersSection from "@/components/About/DealersSection";
import Layout from "@/components/Layout";
import React from "react";
import SubHeader from "@/components/SubHeader";

const AboutUs = () => {
  return (
    <Layout>
      <SubHeader backgroundImg="aboutUsHeaderBg.jpeg" title="Sobre nosotros" />
      <IntroSection />
      <MissionVisionSection />
      <DealersSection />
    </Layout>
  );
};

export default AboutUs;
