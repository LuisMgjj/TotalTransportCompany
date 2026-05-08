import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";

// Home stays eager so the initial route renders without a flash; rest are lazy.
import Home from "@/pages/Home";
const Services = lazy(() => import("@/pages/Services"));
const Sustainability = lazy(() => import("@/pages/Sustainability"));
const Team = lazy(() => import("@/pages/Team"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const Legal = lazy(() => import("@/pages/Legal"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="container-ttc py-24" aria-busy="true" aria-live="polite">
    <div className="h-8 w-48 animate-pulse rounded-md bg-muted" />
    <div className="mt-4 h-4 w-72 animate-pulse rounded-md bg-muted" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/dienstleistungen"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/nachhaltigkeit"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Sustainability />
                </Suspense>
              }
            />
            <Route
              path="/team"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Team />
                </Suspense>
              }
            />
            <Route
              path="/faq"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <FAQ />
                </Suspense>
              }
            />
            <Route
              path="/kontakt"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/impressum"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Legal />
                </Suspense>
              }
            />
            <Route
              path="/datenschutz"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Legal />
                </Suspense>
              }
            />
            <Route
              path="/agb"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Legal />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
