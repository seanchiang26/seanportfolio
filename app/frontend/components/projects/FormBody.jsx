import {
  TextInput,
  Textarea,
  Group,
  Button,
  MultiSelect,
  Stack,
} from "@mantine/core";
import {
  tags_projects_backend,
  tags_projects_frontend,
  tags_projects_fullstack,
} from "@/helpers/Tags";

export default function FormBody({ form }) {
  return (
    <Stack gap="md">
      <TextInput
        label="title"
        placeholder="your title"
        name="title"
        variant="filled"
        errors={form.errors.title}
        value={form.data.title}
        onChange={e => form.setData("title", e.target.value)}
      />

      <TextInput
        label="one liner"
        placeholder="your one liner"
        name="one_liner"
        variant="filled"
        errors={form.errors.one_liner}
        value={form.data.one_liner}
        onChange={e => form.setData("one_liner", e.target.value)}
      />

      <TextInput
        label="url"
        placeholder="your ur;"
        name="url"
        variant="filled"
        errors={form.errors.url}
        value={form.data.url}
        onChange={e => form.setData("url", e.target.value)}
      />

      <Textarea
        label="body"
        placeholder="your body"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        errors={form.errors.body}
        value={form.data.body}
        onChange={e => form.setData("body", e.target.value)}
      />

      <MultiSelect
        label="tags"
        variant="filled"
        placeholder="pick some tags"
        data={[
          { group: "fullstack", items: tags_projects_fullstack },
          { group: "frontend", items: tags_projects_frontend },
          { group: "backend", items: tags_projects_backend },
        ]}
        value={form.data.tag_list}
        onChange={e => form.setData("tag_list", e)}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          submit
        </Button>
      </Group>
    </Stack>
  );
}
