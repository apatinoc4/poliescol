"use client";

import PostListSection from "@/components/Blog/PostListSection";
import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";

const Blog = () => {
  return (
    <Layout>
      <SubHeader backgroundImg="blogHeaderBg.jpeg" title="Blogs y noticias" />
      <PostListSection />
    </Layout>
  );
};

export default Blog;
