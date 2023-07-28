import { withRouter } from "storybook-addon-react-router-v6";
import MainTemplate from "./MainTemplate";

export default {
  component: MainTemplate,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
      outlet: <main>Main Content</main>,
    },
  },
};

export const Example = {};
