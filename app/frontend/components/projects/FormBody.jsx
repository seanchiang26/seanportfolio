import { TextInput, Textarea, Group, Button } from "@mantine/core";

export default function FormBody(form) {
  return (
    <>
      <TextInput
        label="title"
        placeholder="your title"
        name="title"
        variant="filled"
        value={form.form.data.title}
        onChange={e => form.form.setData("title", e.target.value)}
      />
      {form.form.errors.title && <div>{form.form.errors.title}</div>}

      <Textarea
        mt="md"
        label="body"
        placeholder="your body"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        value={form.form.data.body}
        onChange={e => form.form.setData("body", e.target.value)}
      />
      {form.form.errors.body && <div>{form.form.errors.body}</div>}

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          submit
        </Button>
      </Group>
    </>
  );
}
