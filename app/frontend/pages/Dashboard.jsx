import { router } from "@inertiajs/react";
import { Button, Container } from "@mantine/core";

export default function Dashboard() {
  return (
    <Container size="md">
      <Button
        ml="sm"
        onClick={() => {
          router.delete("/logout");
        }}
      >
        Logout
      </Button>
    </Container>
  );
}
