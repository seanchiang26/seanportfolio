import { Card, Title, Button, Text, Overlay } from "@mantine/core";
import { Link } from "@inertiajs/react";
import classes from "./ProjectsCarousel.module.css";

export function ProjectsCard({ title, one_liner, slug }) {
  return (
    <Card
      shadow="md"
      radius="md"
      p="xl"
      style={{
        backgroundImage: `url("/images/diehard_ss.png")`,
      }}
      className={classes.card}
    >
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <div>
          <Title order={2} className={classes.title}>
            {title}
          </Title>
          <Text className={classes.one_liner} size="xs" mt="xs">
            {one_liner}
          </Text>
        </div>
        <Link href={`/projects/${slug}`}>
          <Button variant="white" color="dark" className={classes.action}>
            learn more
          </Button>
        </Link>
      </div>
    </Card>
  );
}
