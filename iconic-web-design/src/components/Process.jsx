import { Box, Container, Typography, Grid } from "@mui/material";
import { Reveal } from "./utils/Reveal";
import { SectionTag } from "./utils/SectionTag";
import { Step } from "./cards/Step";

const steps = [
  {
    num: "01",
    title: "Découverte",
    description: "On échange sur votre projet, vos objectifs et vos contraintes. Appel ou visio gratuit, sans engagement.",
  },
  {
    num: "02",
    title: "Maquette",
    description: "Design et structure validés ensemble avant tout développement. Vous voyez avant de valider.",
  },
  {
    num: "03",
    title: "Développement",
    description: "Intégration pixel-perfect, responsive, optimisé pour les moteurs de recherche et ultra-rapide.",
  },
  {
    num: "04",
    title: "Livraison",
    description: "Mise en ligne, formation et suivi post-lancement inclus. On ne disparaît pas après la livraison.",
  },
];

export function Process() {
  return (
    <Box id="process" sx={{ background: "#0E1628", py: 10 }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionTag>Comment ça marche</SectionTag>
        </Reveal>
        <Reveal delay={80}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" }, mb: 1 }}>
            Un process clair,<br />de A à Z
          </Typography>
        </Reveal>
        <Reveal delay={160}>
          <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 300, maxWidth: 460, mb: 6 }}>
            Pas de surprises, pas de délais flous. On travaille ensemble à chaque étape.
          </Typography>
        </Reveal>
        <Grid container spacing={3}>
          {steps.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={s.num}>
              <Reveal delay={i * 80}>
                <Step {...s} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
