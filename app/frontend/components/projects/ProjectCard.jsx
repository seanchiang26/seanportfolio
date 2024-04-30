import { Card, Button, Overlay, Text, Pill, Group, Title } from "@mantine/core";
import { Link } from "@inertiajs/react";
import classes from "./ProjectCard.module.css";

export function ProjectCard({ project }) {
  const image = "/images/diehard_ss.png";

  return (
    <Card
      radius="md"
      className={classes.card}
      style={{ backgroundImage: `url(${project.image_url})` }}
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
