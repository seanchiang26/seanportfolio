import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Title, Container, rem, useMantineTheme } from "@mantine/core";
import { ProjectsCard } from "./ProjectsCard";
import { usePage } from "@inertiajs/react";

export function ProjectsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { projects } = usePage().props;

  const slides = projects.map(project => (
    <Carousel.Slide key={project.title}>
      <ProjectsCard {...project} />
    </Carousel.Slide>
  ));

  return (
    <Container size="md">
      <Title order={2} size="h1" fw={900} ta="center">
        some things i've built
      </Title>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        mt="xl"
      >
        {slides}
      </Carousel>
    </Container>
  );
}
