import {
  Container,
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function ContactForm() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: value => value.trim().length < 2,
      email: value => !/^\S+@\S+$/.test(value),
      message: value => value.trim().length === 0,
    },
  });

  return (
    <Container id="contact" size="md">
      <form onSubmit={form.onSubmit(() => {})}>
        <Title order={2} size="h1" fw={900} ta="center">
          leave me a message
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="name"
            placeholder="your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="email"
            placeholder="your@email.com"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <Textarea
          mt="md"
          label="message"
          placeholder="your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            submit
          </Button>
        </Group>
      </form>
    </Container>
  );
}
