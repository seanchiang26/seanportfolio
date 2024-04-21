import { Button, Container, Stack } from "@mantine/core";
import { Link, usePage } from "@inertiajs/react";

export default function ProjectsIndex({ projects }) {
  const { auth } = usePage().props;
  console.log(auth);

  return (
    <Container size="md">
      <Stack>
        {projects.map(project => {
          return <Link href={`/projects/${project.id}`}>{project.title}</Link>;
        })}
        {auth.role == "admin" ? (
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
