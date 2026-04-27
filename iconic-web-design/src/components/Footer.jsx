import { Box, Stack, Typography } from "@mui/material";
import { LogoIcon } from "./utils/LogoIcon";

export function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "0.5px solid rgba(0,212,255,0.12)", px: { xs: 2, md: 6 }, py: 3 }}>
      <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" gap={2}>
        <Stack direction="row" alignItems="center" gap={1.5}>
          <LogoIcon size={24} />
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            iconic<Box component="span" sx={{ color: "primary.main" }}>.</Box>web
            <Box component="span" sx={{ fontFamily: "'DM Sans'", fontWeight: 300, fontSize: "0.6rem", color: "primary.main", letterSpacing: "0.18em", ml: 0.5 }}>
              design
            </Box>
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © 2025 Iconic Web Design · Nord de France
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          contact@iconicwebdesign.fr
        </Typography>
      </Stack>
    </Box>
  );
}
