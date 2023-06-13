import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NextLink from "next/link";
export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Typography variant="h6" color="white">
            CookieApp
          </Typography>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href="/theme-changer" passHref>
          <Typography variant="h6" color="white">
            Change Theme
          </Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
