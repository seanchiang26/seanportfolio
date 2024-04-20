import {
  Container,
  TextInput,
  PasswordInput,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@inertiajs/react";
import { FlashMessages } from "../components/flashmessages/FlashMessages";

export default function AuthLogin() {
  const form = useForm({
    email: "",
    password: "",
    remember: false,
  });

  function submit(e) {
    e.preventDefault();
    form.transform(data => ({
      user: {
        email: data.email,
        password: data.password,
        remember: data.remember,
      },
    }));
    form.post(`/login`);
  }

  return (
    <Container size="md">
      <FlashMessages />
      <form onSubmit={submit}>
        <TextInput
          label="email"
          placeholder="your email"
          name="email"
          variant="filled"
          value={form.data.email}
          onChange={e => form.setData("email", e.target.value)}
        />
        {form.errors.email && <div>{form.errors.email}</div>}

        <PasswordInput
          label="password"
          placeholder="your password"
          name="password"
          variant="filled"
          value={form.data.password}
          error={form.errors.password}
          onChange={e => form.setData("password", e.target.value)}
        />
        {form.errors.password && <div>{form.errors.password}</div>}

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            submit
          </Button>
        </Group>
      </form>
    </Container>
  );
}
