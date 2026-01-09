import Header from "@/components/feature/header";
import { ThemeProvider } from "@/components/feature/header/components/mode-toggle/ThemeProvider";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex flex-col gap-1 h-dvh">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  </ThemeProvider>
);

export const Route = createRootRoute({ component: RootLayout });
