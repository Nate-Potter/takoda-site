import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
// import ServicesPage from "../pages/ServicesPage";
// import PortfolioPage from "../pages/PortfolioPage";
// import ContactPage from "../pages/ContactPage";
// import AboutPage from "../pages/AboutPage";
// import ThankYouPage from "../pages/ThankYouPage";
// import DashboardPage from "../pages/DashboardPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} /> 
      <Route path="/about" element={<AboutPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/dashboard" element={<DashboardPage />} /> */}
    </Routes>
  );
}
