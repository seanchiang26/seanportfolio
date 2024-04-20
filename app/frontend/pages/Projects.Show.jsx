import { Button, Container, Stack } from "@mantine/core";
import { router, Link, usePage } from "@inertiajs/react";

export default function ProjectsShow({ project }) {
  const { auth } = usePage().props;

  return (
    <Container size="md">
      <h1>{project.title}</h1>
      <p>{project.body}</p>
      {auth ? (
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
      ) : (
        <></>
      )}
    </Container>
  );
}
