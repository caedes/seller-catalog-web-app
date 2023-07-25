import { Typography } from "@mui/material";
import { node, string } from "prop-types";

export default function Page({ title, children }) {
  return (
    <>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>

      {children}
    </>
  );
}

Page.propTypes = {
  title: string,
  children: node,
};
