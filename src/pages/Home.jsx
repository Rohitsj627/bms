import HeroSection from "./home/HeroSection";
import FeaturedCourses from "./home/FeaturedCourses";
import StatsSection from "./home/StatsSection";
import WhyChooseUs from "./home/WhyChooseUs";
import Testimonials from "./home/Testimonials";
import Newsletter from "./home/Newsletter";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
}