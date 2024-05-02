import { Link } from "@inertiajs/react";
import { Button, Card, Group, Title } from "@mantine/core";

export function DashboardProjectCard({ project }) {
  return (
    <Card>
      <Group justify="space-between">
        <Link
          href={`/projects/${project.slug}`}
          className="no-underline text-black"
        >
          <Title order={3}>{project.title}</Title>
        </Link>
        <Group>
          <Link href={`/projects/${project.slug}/edit`}>
            <Button variant="outline">Edit</Button>
          </Link>
          <Button color="red">Archive</Button>
        </Group>
      </Group>
    </Card>
  );
}
