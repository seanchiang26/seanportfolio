import { Button, Container, Stack } from "@mantine/core";
import { router, Link } from "@inertiajs/react";

export default function ProjectsShow({ project }) {
  return (
    <Container size="md">
      <h1>{project.title}</h1>
      <p>{project.body}</p>
      <Stack>
        <Link href={`/projects/${project.id}/edit`}>Edit</Link>
        <div>
          <Button
            onClick={() => {
              router.delete(`/projects/${project.id}`);
            }}
          >
            Delete
          </Button>
        </div>
      </Stack>
    </Container>
  );
}
