import { withRouter } from "storybook-addon-react-router-v6";
import { FavoritesContext } from "../../contexts";
import ProductActions from "./ProductActions";

export default {
  component: ProductActions,
  decorators: [
    withRouter,
    (Story) => (
      <FavoritesContext.Provider>
        <Story />
      </FavoritesContext.Provider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
};

export const Example = {
  args: {
    id: 123,
  },
};
