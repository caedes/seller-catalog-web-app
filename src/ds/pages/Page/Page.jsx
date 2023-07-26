import { Box, Typography } from "@mui/material";
import { node, string } from "prop-types";

export default function Page({ title, children }) {
  return (
    <Box sx={{ px: 3 }} component="main">
      <Box sx={{ ml: 21, py: 8 }} component="header">
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </Box>

      {children}
    </Box>
  );
}

Page.propTypes = {
  title: string,
  children: node,
};
