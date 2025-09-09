import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/layout/Navbar";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ErrorFallback from "./components/common/ErrorFallback";
import { ToastContainer } from 'react-toastify';

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const Contact = lazy(() => import("./pages/Contact"));
const CourseDetailPage = lazy(() => import('./pages/CourseDetail'));
const CertificationVerificationPage = lazy(() => import('./pages/CertificationVerificationPage'));
const Activities = lazy(() => import('./pages/Activities'));
const OffersAndSchemes = lazy(() => import('./pages/OffersAndSchemes'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const FAQ = lazy(() => import('./pages/FAQ'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const DashboardCourses = lazy(() => import('./pages/dashboard/Dashboard.Courses'));
const DashboardTestimonials = lazy(() => import('./pages/dashboard/Dashboard.Testimonial'));

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>
            <div className="bg-gray-50 min-h-screen">
              <Navbar />
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:courseId" element={<CourseDetailPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/certificate-verification" element={<CertificationVerificationPage />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/offers-and-schemes" element={<OffersAndSchemes />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard-login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/user-dashboard" element={<UserDashboard />} />
                  <Route path="/dashboard/courses" element={<DashboardCourses />} />
                  <Route path="/dashboard/testimonials" element={<DashboardTestimonials />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Newsletter />
              <Footer />
              <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </Router>
        </ErrorBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  );
}