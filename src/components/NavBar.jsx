import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Box,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";

const pages = ["News Articles"];

const LinkWrapper = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: 20,
  color: alpha(theme.palette.common.white, 0.85),
  fontWeight: 800,
  "&:hover": {
    color: alpha(theme.palette.common.white, 0.35),
  },
}));
function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center" variant="h5">
                    <LinkWrapper to={`/`}>{page}</LinkWrapper>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={`/`}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NEWS ARTICLES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <LinkWrapper to={`/`}>{page}</LinkWrapper>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
