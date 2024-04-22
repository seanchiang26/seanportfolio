import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import classes from "./HomeBanner.module.css";

export function HomeBanner() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            hi, i'm <span className={classes.highlight}>sean</span>
          </Title>
          <Text c="dimmed" mt="md">
            i like building cool things
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>welcome to my website!</b> – i built this to learn ruby on
              rails and have a place to put the stuff i've worked on
            </List.Item>
            <List.Item>
              <b>who am i?</b> – i'm a software developer who's experienced with
              bringing start ups from zero to one
            </List.Item>
            <List.Item>
              <b>whats new?</b> – i'm looking for new opportunities!
            </List.Item>
          </List>

          <Group mt={30}>
            <Link href="/#contact">
              <Button radius="xl" size="md" className={classes.control}>
                contact me
              </Button>
            </Link>
            <Button
              component="a"
              href="https://github.com/seanchiang26/seanportfolio"
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              source code
            </Button>
          </Group>
        </div>
        <div className={classes.image}>insert image here</div>
      </div>
    </Container>
  );
}
