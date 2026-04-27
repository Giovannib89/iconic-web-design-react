import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00D4FF" },
    secondary: { main: "#7B5FFF" },
    background: { default: "#080D1A", paper: "#111B30" },
    text: { primary: "#F0F4FF", secondary: "#6B7A99" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 },
    h2: { fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 },
    h3: { fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" },
    h6: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: "0.95rem",
        },
        containedPrimary: { color: "#080D1A", "&:hover": { opacity: 0.88 } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#111B30",
          border: "0.5px solid rgba(0,212,255,0.15)",
          borderRadius: 16,
          transition: "border-color 0.3s, transform 0.2s",
          "&:hover": { borderColor: "rgba(0,212,255,0.4)", transform: "translateY(-4px)" },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(8,13,26,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "0.5px solid rgba(0,212,255,0.15)",
          boxShadow: "none",
        },
      },
    },
  },
});
