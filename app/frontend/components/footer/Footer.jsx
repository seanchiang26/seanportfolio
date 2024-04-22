import { Container, Group, ActionIcon, Tooltip, rem } from "@mantine/core";
import {
  IconMail,
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
        <Group justify="center" gap="sm">
          <a href="mailto:schiang226@gmail.com">
            <Tooltip label="Email">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconMail
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </a>
          <a href="https://github.com/seanchiang26">
            <Tooltip label="Github">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandGithub
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </a>
          <a href="https://www.linkedin.com/in/seanchiang26/">
            <Tooltip label="Linkedin">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandLinkedin
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </a>
          <a href="https://open.spotify.com/user/candycanehappy">
            <Tooltip label="Spotify">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandSpotify
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </a>
          <a href="https://www.instagram.com/sean.chiang/">
            <Tooltip label="Instagram">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandInstagram
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </a>
        </Group>
      </Container>
    </div>
  );
}
