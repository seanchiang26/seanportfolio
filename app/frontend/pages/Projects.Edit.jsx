import { Container } from "@mantine/core";
import { useForm } from "@inertiajs/react";
import FormBody from "../components/projects/FormBody";

export default function ProjectsEdit({ project }) {
  const form = useForm({
    title: project.title,
    body: project.body,
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
