import { Title, Container, Stack } from "@mantine/core";
import { ProjectCard } from "../components/projects/ProjectCard";

export default function ProjectsIndex({ projects }) {
  return (
    <Container size="md">
      <Title order={1} py="lg" ta="center">
        my projects
      </Title>
      <Stack mt="lg">
        {projects.map(project => {
          return <ProjectCard key={project.slug} project={project} />;
        })}
      </Stack>
    </Container>
  );
}
