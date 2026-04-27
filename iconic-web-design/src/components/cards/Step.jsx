import { Box, Typography } from "@mui/material";

export function Step({ num, title, description }) {
  return (
    <Box sx={{ borderLeft: "1px solid rgba(0,212,255,0.15)", pl: 2.5 }}>
      <Typography
        sx={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "3rem",
          fontWeight: 800,
          color: "rgba(0,212,255,0.1)",
          lineHeight: 1,
          mb: 1,
        }}
      >
        {num}
      </Typography>
      <Typography variant="h3" sx={{ fontSize: "1rem", mb: 0.75 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 300, lineHeight: 1.7 }}>
        {description}
      </Typography>
    </Box>
  );
}
