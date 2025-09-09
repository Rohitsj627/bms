import { Helmet } from 'react-helmet-async';
import HeroSection from "./home/HeroSection";
import FeaturedCourses from "./home/FeaturedCourses";
import WhyChooseUs from "./home/WhyChooseUs";
import AboutUsPreview from "./home/AboutUsPreview";
import TestimonialsSection from "./home/TestimonialsSection";
import PartnersSection from "./home/PartnersSection";
import BlogPreview from "./home/BlogPreview";
import StatsSection from "./home/StatsSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>BMS Academy - Premier IT Training & Professional Development</title>
        <meta name="description" content="Transform your career with BMS Academy's comprehensive IT training programs. Expert-led courses in programming, digital marketing, accounting, and more." />
        <meta name="keywords" content="IT training, programming courses, digital marketing, accounting, professional development, certification" />
      </Helmet>
      
      <HeroSection />
      <StatsSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <AboutUsPreview />
      <TestimonialsSection />
      <PartnersSection />
      <BlogPreview />
    </>
  );
}