import {
  Text,
  Container,
  Divider,
  Stack,
  Title,
  Group,
  Pill,
  SimpleGrid,
  Image,
  Paper,
} from "@mantine/core";
import { router, Link, usePage } from "@inertiajs/react";

export default function ProjectsShow({ project }) {
  const { auth } = usePage().props;

  return (
    <Container size="md">
      <Stack gap="lg">
        <Title order={2}>{project.title}</Title>
        <Title order={4}>{project.one_liner}</Title>
        <Group>
          {project.tag_list.map(tag => (
            <Pill key={project.id + tag}>{tag}</Pill>
          ))}
        </Group>

        <Divider />

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Text>{project.body}</Text>
          <Image
            fit="contain"
            radius="md"
            src={
              "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            }
          />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
