import { Container } from "@mantine/core";
import { useForm } from "@inertiajs/react";
import FormBody from "../components/projects/FormBody";

export default function ProjectsEdit({ project }) {
  const form = useForm({
    title: project.title,
    one_liner: project.one_liner,
    url: project.url,
    image_url: project.image_url,
    body: project.body,
    tag_list: project.tag_list,
  });

  function submit(e) {
    e.preventDefault();
    form.put(`/projects/${project.id}`);
  }

  return (
    <Container size="md">
      <form onSubmit={submit}>
        <FormBody form={form} />
      </form>
    </Container>
  );
}
