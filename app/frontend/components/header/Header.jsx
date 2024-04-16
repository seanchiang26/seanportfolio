import {
  Group,
  Divider,
  Box,
  Container,
  Image,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@inertiajs/react";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/projects", label: "Projects" },
  { link: "/resume", label: "Resume" },
  { link: "/contact", label: "Contact" },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const items = links.map(link => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <Box>
      <Container className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href={"/"}>
            <Image h={30} src="images/emojiicon.svg" />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            {items}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </Container>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {items}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
