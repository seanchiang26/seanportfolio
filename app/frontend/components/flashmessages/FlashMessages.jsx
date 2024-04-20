import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { usePage } from "@inertiajs/react";

export function FlashMessages() {
  const { flash, has_flash } = usePage().props;

  // Do not render anything if no flash
  if (!has_flash) {
    return null;
  } else {
    let color, title, msg;

    if (flash.success) {
      color = "green";
      title = "Success";
      msg = flash.success;
    }
    if (flash.alert) {
      color = "red";
      title = "Alert";
      msg = flash.alert;
    }
    if (flash.error) {
      color = "red";
      title = "Error";
      msg = flash.error;
    }
    if (flash.notice) {
      color = "blue";
      title = "Notice";
      msg = flash.notice;
    }

    return (
      <Alert
        variant="light"
        color={color}
        title={title}
        icon={<IconInfoCircle />}
      >
        {msg}
      </Alert>
    );
  }
}
