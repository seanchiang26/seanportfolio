import { Title, Button, Container, Stack } from "@mantine/core";
import { Link, usePage } from "@inertiajs/react";
import { ProjectCard } from "../components/projects/ProjectCard";

export default function ProjectsIndex({ projects }) {
  const { auth } = usePage().props;

  return (
    <Container size="md">
      <Title order={2} size="h1" fw={900} ta="center">
        my professional work
      </Title>
      <Stack mt="lg">
        {projects.map(project => {
          return <ProjectCard key={project.id} project={project} />;
        })}
        {auth && auth.role == "admin" ? (
          <Link href="/projects/new">
            <Button>New</Button>
          </Link>
        ) : (
          <></>
        )}
      </Stack>
    </Container>
  );
}
