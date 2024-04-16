import { Container, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandSpotify,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group gap="sm" justify="flex-end" wrap="nowrap">
          <a href="https://github.com/seanchiang26">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
          <a href="https://www.linkedin.com/in/seanchiang26/">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
          <a href="https://open.spotify.com/user/candycanehappy">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandSpotify
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
          <a href="https://www.instagram.com/sean.chiang/">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}
