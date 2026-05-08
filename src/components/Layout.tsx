import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CallFab from "@/components/CallFab";
import CookieBanner from "@/components/CookieBanner";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <SiteHeader />
      <main key={pathname} className="flex-1 page-transition">
        <Outlet />
      </main>
      <SiteFooter />
      <CallFab />
      <CookieBanner />
    </div>
  );
};

export default Layout;
