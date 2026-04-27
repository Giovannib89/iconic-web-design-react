import { Box, Typography } from "@mui/material";

export function BadgePill({ children }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        background: "rgba(0,212,255,0.08)",
        border: "0.5px solid rgba(0,212,255,0.2)",
        borderRadius: 50,
        px: 2,
        py: 0.5,
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#00D4FF",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%,100%": { opacity: 1 },
            "50%": { opacity: 0.3 },
          },
        }}
      />
      <Typography
        sx={{
          fontSize: "0.75rem",
          color: "primary.main",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
