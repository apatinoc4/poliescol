import ContactAdviserSection from "@/components/ContactAdvisors";
import Layout from "@/components/Layout";
import ProductsSection from "@/components/Products/ProductsSection";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <ProductsSection />
      <ContactAdviserSection />
    </Layout>
  );
};

export default Products;
