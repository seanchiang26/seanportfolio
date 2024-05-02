import { router } from "@inertiajs/react";
import { Button, Container, Title, Stack, Group, Card } from "@mantine/core";
import { DashboardProjectCard } from "@/components/dashboard/DashboardProjectCard";

/**
 * TODO:
 *   - Format forms
 *   - Proper login screen
 *   - Dynamic head
 *   - Implement SSR
 *   - Add archived/published status to projects
 *   - Add ability to order the projects
 *   - Mailers? so i can implement the messaging box
 */

export default function Dashboard({ projects }) {
  return (
    <Container size="md">
      {/** Think about where to actually put this logout button */}
      <Group justify="flex-end">
        <Button
          ml="sm"
          color="red"
          onClick={() => {
            router.delete("/logout");
          }}
        >
          Logout
        </Button>
      </Group>

      <Stack>
        <Title order={2} ta="center">
          Projects
        </Title>
        <Card withBorder radius="md">
          {projects.map(project => (
            <DashboardProjectCard project={project} />
          ))}
        </Card>
      </Stack>
    </Container>
  );
}
