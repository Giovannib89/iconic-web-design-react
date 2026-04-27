import { Box, Container, Typography, Grid } from "@mui/material";
import { Reveal } from "./utils/Reveal";
import { SectionTag } from "./utils/SectionTag";
import { ServiceCard } from "./cards/ServiceCard";

const services = [
  {
    icon: "⬡",
    title: "Sites WordPress",
    accent: "primary",
    description: "Conception de sites WordPress professionnels, thèmes personnalisés, plugins sur mesure et optimisation SEO.",
    checks: ["Thème 100% personnalisé", "Administration simple et autonome", "SEO & performance optimisés"],
    price: "À partir de 800€",
  },
  {
    icon: "◈",
    title: "Sites codés from scratch",
    accent: "secondary",
    description: "Développement HTML/CSS/JS ou framework moderne (React, Next.js) pour des projets ambitieux et singuliers.",
    checks: ["Architecture sur mesure", "Performances maximales", "Design 100% unique & mémorable"],
    price: "À partir de 1 500€",
  },
  {
    icon: "◇",
    title: "Refonte & maintenance",
    accent: "primary",
    description: "Votre site est vieillissant ? Nous le modernisons, l'optimisons et assurons sa maintenance au quotidien.",
    checks: ["Audit complet offert", "Migration sans coupure", "Support réactif inclus"],
    price: "Sur devis",
  },
];

export function Services() {
  return (
    <Box id="services" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionTag>Nos expertises</SectionTag>
        </Reveal>
        <Reveal delay={80}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" }, mb: 1 }}>
            Deux approches,<br />une seule ambition
          </Typography>
        </Reveal>
        <Reveal delay={160}>
          <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 300, maxWidth: 460, mb: 6 }}>
            Que vous ayez besoin d'un site WordPress flexible ou d'une solution 100% sur mesure, nous livrons des sites qui performent.
          </Typography>
        </Reveal>
        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid item xs={12} md={4} key={s.title}>
              <Reveal delay={i * 100}>
                <ServiceCard {...s} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
