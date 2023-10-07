import AdvisorListSection from "@/components/Advisors";
import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import React from "react";

const Advisors = () => {
  return (
    <Layout>
      <SubHeader backgroundImg="productsHeaderBg.jpeg" title="Asesores" />
      <AdvisorListSection />
    </Layout>
  );
};

export default Advisors;
