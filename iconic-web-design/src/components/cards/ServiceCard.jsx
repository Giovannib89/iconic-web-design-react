import { Card, CardContent, Box, Typography, Stack, Chip } from "@mui/material";

export function ServiceCard({ icon, title, description, checks, price, accent = "primary" }) {
  const color = accent === "secondary" ? "#7B5FFF" : "#00D4FF";
  const bg = accent === "secondary" ? "rgba(123,95,255,0.1)" : "rgba(0,212,255,0.1)";

  return (
    <Card
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0,
          transition: "opacity 0.3s",
        },
        "&:hover::before": { opacity: 1 },
      }}
    >
      <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            background: bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            fontSize: "1.3rem",
          }}
        >
          {icon}
        </Box>
        <Typography variant="h3" sx={{ fontSize: "1.1rem", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, fontWeight: 300, mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ mt: "auto" }}>
          {checks.map((c, i) => (
            <Stack key={i} direction="row" alignItems="center" gap={1} sx={{ mb: 0.8 }}>
              <Typography sx={{ color, fontSize: "0.85rem" }}>✓</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem", fontWeight: 300 }}>
                {c}
              </Typography>
            </Stack>
          ))}
          <Chip label={price} size="small" sx={{ mt: 2, background: bg, color, fontSize: "0.75rem", borderRadius: 50 }} />
        </Box>
      </CardContent>
    </Card>
  );
}
