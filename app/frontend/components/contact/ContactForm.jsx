import {
  Text,
  Title,
  Tooltip,
  Container,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactForm.module.css";

export function ContactForm() {
  return (
    <Container id="contact" size="md" className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            leave me a message and i'll get back to you asap
          </Text>

          <ContactIconsList />

          <Group mt="xl">
            <a href="https://github.com/seanchiang26">
              <Tooltip label="Github">
                <ActionIcon
                  size={28}
                  className={classes.social}
                  variant="transparent"
                >
                  <IconBrandGithub size="1.4rem" stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            </a>
            <a href="https://www.linkedin.com/in/seanchiang26/">
              <Tooltip label="Linkedin">
                <ActionIcon
                  size={28}
                  className={classes.social}
                  variant="transparent"
                >
                  <IconBrandLinkedin size="1.4rem" stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            </a>
            <a href="https://www.instagram.com/sean.chiang/">
              <Tooltip label="Instagram">
                <ActionIcon
                  size={28}
                  className={classes.social}
                  variant="transparent"
                >
                  <IconBrandInstagram size="1.4rem" stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            </a>
          </Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="name"
            placeholder="john doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="your message"
            placeholder="i want to be your friend"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </Container>
  );
}
