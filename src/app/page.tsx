import ContactSection from "@/components/Home/ContactSection";
import DealersSection from "@/components/Home/DealersSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import IntroSection from "@/components/Home/IntroSection";
import LocationSection from "@/components/Home/LocationSection";
import ProductSection from "@/components/Home/ProductSection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <IntroSection />
      <ExperienceSection />
      <ProductSection />
      <DealersSection />
      <ContactSection />
      <LocationSection />
    </Layout>
  );
}
