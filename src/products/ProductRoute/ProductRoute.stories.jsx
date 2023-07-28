import { withRouter } from "storybook-addon-react-router-v6";
import ProductRoute from "./ProductRoute.jsx";
import { FavoritesContext } from "../../contexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default {
  component: ProductRoute,
  decorators: [
    withRouter,
    (Story) => (
      <FavoritesContext.Provider>
        <Story />
      </FavoritesContext.Provider>
    ),
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/products/:id",
      routeParams: { id: 123 },
    },
  },
};

// FIXME Missing MSW Storybook config
export const Example = {};
