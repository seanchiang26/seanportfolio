import { Card, Button, Overlay, Text } from "@mantine/core";
import { Link } from "@inertiajs/react";
import classes from "./ProjectCard.module.css";

export function ProjectCard({ project }) {
  const image =
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  console.log(project);
  return (
    <Card
      radius="md"
      className={classes.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          {project.title}
        </Text>

        <Text size="sm" className={classes.description}>
          description
        </Text>

        <Link href={`/projects/${project.id}`}>
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
