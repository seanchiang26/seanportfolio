import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Title, Container, rem, useMantineTheme } from "@mantine/core";
import { ProjectsCard } from "./ProjectsCard";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Die-Hard",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Ping Communications",
  },
];

export function ProjectsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map(item => (
    <Carousel.Slide key={item.title}>
      <ProjectsCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="md">
      <Title order={2} size="h1" fw={900} ta="center">
        some things i've done
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
