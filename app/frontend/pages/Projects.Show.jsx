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
import { IconExternalLink } from "@tabler/icons-react";

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
          <Image fit="contain" radius="md" src={project.image_url} />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
