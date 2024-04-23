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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactForm.module.css";

export function ContactForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      message: {
        email: "",
        name: "",
        body: "",
      },
    },

    validate: {
      message: {
        email: value => (/^\S+@\S+$/.test(value) ? null : "invalid email"),
      },
    },
  });

  return (
    <Container id="contact" size="md" className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>leave me a message</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            and i'll get back to you asap
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
          <form
            onSubmit={form.onSubmit(values =>
              axios
                .post("/messages", values)
                .then(res =>
                  res.status == 201
                    ? notifications.show({
                        color: "blue",
                        title: "Notice",
                        message: "Message received!",
                      })
                    : notifications.show({
                        color: "red",
                        title: "Alert",
                        message: "Something went wrong, try again later!",
                      }),
                ),
            )}
          >
            <TextInput
              label="email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("message.email")}
            />
            <TextInput
              label="name"
              placeholder="john doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("message.name")}
            />
            <Textarea
              required
              label="your message"
              placeholder="i want to be your friend"
              minRows={4}
              maxRows={4}
              autosize
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("message.body")}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control} type="submit">
                send message
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </Container>
  );
}
