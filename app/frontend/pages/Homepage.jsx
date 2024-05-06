import { ContactForm } from "../components/contact/ContactForm";
import { HomeBanner } from "../components/homepage/HomeBanner";
import { ProjectsCarousel } from "../components/homepage/projects-carousel/ProjectsCarousel";

export default function Homepage() {
  return (
    <>
      <HomeBanner />
      <ProjectsCarousel />
      <div className="h-[calc(var(--mantine-spacing-xl)*2)]" />
      <ContactForm />
    </>
  );
}
