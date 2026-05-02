import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { BadgePill } from "./utils/BadgePill";

export function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        pt: 12,
        pb: 6,
        px: 2,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
        }}
      />

      <Box sx={{ animation: "fadeUp 0.8s ease both", "@keyframes fadeUp": { from: { opacity: 0, transform: "translateY(24px)" }, to: { opacity: 1, transform: "none" } } }}>
        <BadgePill>Agence web · Nord de France</BadgePill>
      </Box>

      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "4.5rem" },
          mb: 2.5,
          animation: "fadeUp 0.8s 0.1s ease both",
          "@keyframes fadeUp": { from: { opacity: 0, transform: "translateY(24px)" }, to: { opacity: 1, transform: "none" } },
        }}
      >
        Votre présence web,<br />
        <Box component="span" sx={{ background: "linear-gradient(135deg, #00D4FF, #7B5FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          pensée pour convertir
        </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: 560,
          mx: "auto",
          mb: 4,
          fontWeight: 300,
          fontSize: "1.1rem",
          animation: "fadeUp 0.8s 0.2s ease both",
        }}
      >
        Vous avez un projet, une activité, quelque chose à partager ? Iconic Web Design crée le site qui vous ressemble — agréable à regarder, facile à utiliser, et qui donne envie de vous contacter.
      </Typography>

      <Stack direction="row" gap={2} justifyContent="center" flexWrap="wrap" sx={{ animation: "fadeUp 0.8s 0.3s ease both" }}>
        <Button variant="contained" color="primary" size="large" href="#contact" sx={{ px: 3.5 }}>
          Démarrer mon projet
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="#services"
          sx={{
            px: 3.5,
            borderColor: "rgba(255,255,255,0.2)",
            color: "text.primary",
            "&:hover": { borderColor: "primary.main", background: "rgba(0,212,255,0.05)" },
          }}
        >
          Voir les services
        </Button>
      </Stack>

      {/* Stats */}
      <Stack
        direction="row"
        gap={{ xs: 4, md: 8 }}
        mt={8}
        pt={4}
        flexWrap="wrap"
        justifyContent="center"
        sx={{ borderTop: "0.5px solid rgba(0,212,255,0.15)", animation: "fadeUp 0.8s 0.4s ease both" }}
      >
        {[
          // ["50+", "Sites livrés"],
          ["100%", "Satisfaction client"],
          ["48h", "Délai de réponse"],
        ].map(([n, l]) => (
          <Box key={l} textAlign="center">
            <Typography sx={{ fontFamily: "'Syne'", fontSize: "2.2rem", fontWeight: 700, color: "primary.main", letterSpacing: "-0.02em", display: "block" }}>
              {n}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {l}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
