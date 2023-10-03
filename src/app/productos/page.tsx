import Layout from "@/components/Layout";
import AdviserSection from "@/components/Products/AdviserSection";
import ProductsSection from "@/components/Products/ProductsSection";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <ProductsSection />
      <AdviserSection />
    </Layout>
  );
};

export default Products;
