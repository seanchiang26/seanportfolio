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
} from "@mantine/core";
import { IconLink } from "@tabler/icons-react";

export default function ProjectsShow({ project }) {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>{project.title}</Title>
        <Title order={3}>{project.one_liner}</Title>
        {project.url ? (
          <Group gap="xs">
            <IconLink size={20} />
            <a href={project.url}>{project.url}</a>
          </Group>
        ) : null}
        <Group>
          {project.tag_list.map(tag => (
            <Pill key={project.id + tag}>{tag}</Pill>
          ))}
        </Group>

        <Divider my="lg" />

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
