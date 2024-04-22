import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconAt } from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const DATA = [
  { title: "email", description: "schiang226@gmail.com", icon: IconAt },
  {
    title: "timezone",
    description: "pacific standard time (UTC/GMT -8)",
    icon: IconSun,
  },
];

export function ContactIconsList() {
  const items = DATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
