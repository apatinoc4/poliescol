import ContactAdviserSection from "@/components/ContactAdvisors";
import DealersSection from "@/components/Dealers";
import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import React from "react";

const Dealers = () => {
  return (
    <Layout>
      <SubHeader backgroundImg="productsHeaderBg.jpeg" title="Distribuidores" />
      <DealersSection />
      <ContactAdviserSection />
    </Layout>
  );
};

export default Dealers;
