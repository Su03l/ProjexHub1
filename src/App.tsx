import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { Navigation } from "./components/ui/navigation";
import { Footer } from "./components/ui/footer";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ExploreProjects from "./pages/ExploreProjects";
import ProjectDetails from "./pages/ProjectDetails";
import UploadProject from "./pages/UploadProject";
import Messages from "./pages/Messages";
import Competition from "./pages/Competition";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-0">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/explore" element={<ExploreProjects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/upload" element={<UploadProject />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/competition" element={<Competition />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;