import { Container } from "@mantine/core";
import { useForm } from "@inertiajs/react";
import FormBody from "../components/projects/FormBody";

export default function ProjectsEdit() {
  const form = useForm({
    title: "",
    body: "",
  });

  function submit(e) {
    e.preventDefault();
    form.post(`/projects`);
  }

  return (
    <Container size="md">
      <form onSubmit={submit}>
        <FormBody form={form} />
      </form>
    </Container>
  );
}
