import { Typography } from "@mui/material";

export function SectionTag({ children }) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: "primary.main",
        letterSpacing: "0.12em",
        fontSize: "0.75rem",
        display: "block",
        mb: 1,
      }}
    >
      {children}
    </Typography>
  );
}
