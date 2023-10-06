import FaqsSection from "@/components/FAQs/FaqSection";
import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import React from "react";

const Faqs = () => {
  return (
    <Layout>
      <SubHeader backgroundImg="faqsHeaderBg.jpeg" title="FAQ’S" />
      <FaqsSection />
    </Layout>
  );
};

export default Faqs;
