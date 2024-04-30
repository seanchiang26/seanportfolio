import { Paper, Title, Button, Text } from "@mantine/core";
import { Link } from "@inertiajs/react";
import classes from "./ProjectsCarousel.module.css";

export function ProjectsCard({ title, one_liner, slug }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80")`,
      }}
      className={classes.card}
    >
      <div>
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.one_liner} size="xs" mt="xs">
          {one_liner}
        </Text>
      </div>
      <Link href={`/projects/${slug}`}>
        <Button variant="white" color="dark">
          learn more
        </Button>
      </Link>
    </Paper>
  );
}
