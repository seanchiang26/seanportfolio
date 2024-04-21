import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { notifications } from "@mantine/notifications";

export function FlashMessages() {
  const { flash } = usePage().props;

  useEffect(() => {
    Object.keys(flash).forEach(key => {
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

      notifications.show({
        color: color,
        title: title,
        message: msg,
      });
    });
  }, [flash]);

  return null;
}
