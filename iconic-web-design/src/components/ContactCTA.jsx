import { Box, Container, Button, Typography } from "@mui/material";
import { Reveal } from "./utils/Reveal";
import { BadgePill } from "./utils/BadgePill";

export function ContactCTA() {
  return (
    <Box id="contact" sx={{ py: 10, px: 2 }}>
      <Container maxWidth="sm">
        <Reveal>
          <Box
            sx={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.07), rgba(123,95,255,0.07))",
              border: "0.5px solid rgba(0,212,255,0.18)",
              borderRadius: 5,
              p: { xs: 5, md: 8 },
              textAlign: "center",
            }}
          >
            <BadgePill>Prêt à démarrer ?</BadgePill>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" }, mb: 1.5 }}>
              Votre projet mérite<br />
              <Box component="span" sx={{ background: "linear-gradient(135deg, #00D4FF, #7B5FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                un site à la hauteur
              </Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 4, fontWeight: 300 }}>
              Devis gratuit · Réponse sous 48h · Sans engagement
            </Typography>
            <Button variant="contained" color="primary" size="large" href="mailto:contact@iconicwebdesign.fr" sx={{ px: 4 }}>
              Obtenir mon devis gratuit
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
