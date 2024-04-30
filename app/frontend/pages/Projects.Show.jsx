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
  ActionIcon,
} from "@mantine/core";
import { IconExternalLink, IconLink } from "@tabler/icons-react";

export default function ProjectsShow({ project }) {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Group align="center" justify="center" gap="xs">
          <Title ta="center" order={1}>
            {project.title}
          </Title>
          {project.url ? (
            <a href={project.url}>
              <ActionIcon variant="subtle" size="lg">
                <IconExternalLink />
              </ActionIcon>
            </a>
          ) : null}
        </Group>
        <Title ta="center" order={3}>
          {project.one_liner}
        </Title>

        <Group align="center" justify="center">
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
