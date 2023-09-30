import IntroSection from "@/components/About/IntroSection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import DealersSection from "@/components/About/DealersSection";
import Layout from "@/components/Layout";
import React from "react";

const AboutUs = () => {
  return (
    <Layout>
      <IntroSection />
      <MissionVisionSection />
      <DealersSection />
    </Layout>
  );
};

export default AboutUs;
