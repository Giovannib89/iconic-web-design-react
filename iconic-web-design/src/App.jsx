import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { setScrolled } from "./store/slices/uiSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 40));
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <ContactCTA />
      <Footer />
    </ThemeProvider>
  );
}
