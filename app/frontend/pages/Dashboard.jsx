import { router } from "@inertiajs/react";
import { Button, Container } from "@mantine/core";

/**
 * TODO:
 *   - Manage projects on dashboard
 *   - Format forms
 *   - Proper login screen
 *   - Dynamic head
 *   - Implement SSR
 *   - Mailers? so i can implement the messaging box
 */

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
