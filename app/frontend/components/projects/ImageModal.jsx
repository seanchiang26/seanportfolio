import { useDisclosure } from "@mantine/hooks";
import { Box, Modal, UnstyledButton, Image } from "@mantine/core";

export function ImageModal({ image_url }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} size="xl" onClose={close} title="see image">
        <Image fit="contain" radius="md" src={image_url} />
      </Modal>

      <Box>
        <UnstyledButton onClick={open}>
          <Image fit="contain" radius="md" src={image_url} />
        </UnstyledButton>
      </Box>
    </>
  );
}
