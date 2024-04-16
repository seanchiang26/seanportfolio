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
            i like building cool stuff that i find interesting
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
              <b>Welcome to my website!</b> – I built this to learn Ruby on
              Rails and have a place to put the stuff I've worked on
            </List.Item>
            <List.Item>
              <b>Who am I?</b> – I'm a software developer who's experienced with
              bringing start ups from zero to one
            </List.Item>
            <List.Item>
              <b>What's new?</b> – I'm looking for new opportunities!
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Learn more
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Contact me
            </Button>
          </Group>
        </div>
        <div className={classes.image}>insert image here</div>
      </div>
    </Container>
  );
}
