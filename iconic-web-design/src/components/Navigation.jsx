import { useSelector } from "react-redux";
import { AppBar, Toolbar, Stack, Box, Typography, Button } from "@mui/material";
import { LogoIcon } from "./utils/LogoIcon";

export function Navigation() {
  const scrolled = useSelector((state) => state.ui.isScrolled);

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "border-color 0.3s",
        borderBottomColor: scrolled ? "rgba(0,212,255,0.25)" : "rgba(0,212,255,0.1)",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 6 }, justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" gap={1.5}>
          <LogoIcon size={32} />
          <Box>
            <Typography variant="h6" sx={{ fontSize: "1.1rem", lineHeight: 1 }}>
              iconic<Box component="span" sx={{ color: "primary.main" }}>.</Box>web
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans'", fontWeight: 300, fontSize: "0.58rem", color: "primary.main", letterSpacing: "0.2em" }}>
              design
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" gap={3} sx={{ display: { xs: "none", md: "flex" } }}>
          {["Services", "Process", "Contact"].map((l) => (
            <Typography
              key={l}
              component="a"
              href={`#${l.toLowerCase()}`}
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "text.primary" },
                transition: "color 0.2s",
              }}
            >
              {l}
            </Typography>
          ))}
          <Button variant="contained" color="primary" size="small" href="#contact" sx={{ px: 2.5 }}>
            Devis gratuit
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
