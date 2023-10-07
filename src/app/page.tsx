import ContactAdviserSection from "@/components/ContactAdvisors";
import DealersSection from "@/components/Home/DealersSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import IntroSection from "@/components/Home/IntroSection";
import LocationSection from "@/components/Home/LocationSection";
import ProductSection from "@/components/Home/ProductSection";
import SliderSection from "@/components/Home/SliderSection";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <IntroSection />
      <SliderSection />
      <ExperienceSection />
      <ProductSection />
      <DealersSection />
      <ContactAdviserSection />
      <LocationSection />
    </Layout>
  );
}
