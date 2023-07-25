import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

const mainMenu = [
  { name: "Produits", url: "/", domain: "products" },
  { name: "Commandes", url: "/orders", domain: "orders" },
  { name: "Finance", url: "/financial", domain: "financial" },
  { name: "Rapports", url: "/reports", domain: "reports" },
  { name: "Messages", url: "/messages", domain: "messages" },
  { name: "Marketplaces", url: "/marketplaces", domain: "marketplaces" },
];

const isActiveTab = ({ pathname, url, domain }) => {
  return url === pathname || pathname.startsWith(`/${domain}`);
};

export default function MainTemplate() {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Seller Catalog
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {mainMenu.map(({ name, url, domain }) => (
                <Button
                  key={url}
                  component={Link}
                  to={url}
                  variant="navigation"
                  color={
                    isActiveTab({
                      pathname,
                      url,
                      domain,
                    })
                      ? "active"
                      : undefined
                  }
                >
                  {name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Sergio" src="/sergio.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
