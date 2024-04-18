import { Button, Container, Stack } from "@mantine/core";
import { Link } from "@inertiajs/react";

export default function ProjectsIndex({ projects }) {
  return (
    <Container size="md">
      <Stack>
        {projects.map(project => {
          return <Link href={`/projects/${project.id}`}>{project.title}</Link>;
        })}
        <Link href="/projects/new">
          <Button>New</Button>
        </Link>
      </Stack>
    </Container>
  );
}
