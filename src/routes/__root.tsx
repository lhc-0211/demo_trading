import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import Header from "@/components/feature/header";
import { ThemeProvider } from "@/components/feature/header/components/mode-toggle/ThemeProvider";
import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";

const RootLayout = () => {
  const { status } = useRouterState({
    select: (state) => ({
      status: state.status,
    }),
  });

  if (status === "pending") {
    return (
      <div className="flex flex-col h-dvh">
        <Loading />
      </div>
    );
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-1 h-dvh">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
  errorComponent: ({ reset }) => (
    <div className="flex flex-col h-dvh">
      <Error reset={reset} />
    </div>
  ),
});
