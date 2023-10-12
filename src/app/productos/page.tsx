import ContactAdviserSection from "@/components/ContactAdvisors";
import Layout from "@/components/Layout";
import ProductsSection from "@/components/Products/ProductsSection";
import SubHeader from "@/components/SubHeader";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <SubHeader
        backgroundImg="productsHeaderBg.jpeg"
        title="Nuestros productos"
      />
      <ProductsSection />
      <ContactAdviserSection />
    </Layout>
  );
};

export default Products;
