import ContactSection from "@/components/Home/ContactSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import IntroSection from "@/components/Home/IntroSection";
import ProductSection from "@/components/Home/ProductSection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <IntroSection />
      <ExperienceSection />
      <ProductSection />
      <ContactSection />
    </Layout>
  );
}
