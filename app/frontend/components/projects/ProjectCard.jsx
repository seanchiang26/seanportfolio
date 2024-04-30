import { Card, Button, Overlay, Text, Pill, Group, Title } from "@mantine/core";
import { Link } from "@inertiajs/react";
import classes from "./ProjectCard.module.css";

export function ProjectCard({ project }) {
  const image =
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  return (
    <Card
      radius="md"
      className={classes.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          {project.title}
        </Title>
        <Text mb="sm" className={classes.title}>
          {project.one_liner}
        </Text>

        <Group size="sm" className={classes.description}>
          {project.tag_list.map(tag => (
            <Pill key={project.id + tag}>{tag}</Pill>
          ))}
        </Group>

        <Link href={`/projects/${project.slug}`}>
          <Button
            className={classes.action}
            variant="white"
            color="dark"
            size="md"
          >
            learn more
          </Button>
        </Link>
      </div>
    </Card>
  );
}
