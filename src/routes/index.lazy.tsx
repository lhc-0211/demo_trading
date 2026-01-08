import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import PriceBoardPage from "@/pages/PriceBoardPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => <PriceBoardPage />,
  pendingComponent: () => <Loading />,
  errorComponent: ({ error, reset }) => <Error error={error} reset={reset} />,
});
