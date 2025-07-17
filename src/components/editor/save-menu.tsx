import { IconDeviceFloppy } from "@tabler/icons-react";
import { EditorHeaderIconAction } from "./editor-header-icon-action";
import type { FileDef } from "@/hooks/use-file-manager";
import { Menu, Box, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { useMemo, useState } from "react";
import { notifications } from "@mantine/notifications";

// TODO: optionally overwrite

type SaveMenuProps = {
  files: Record<string, FileDef>;
  activeFileId?: string;
  onSave: (id: string, name?: string) => void;
};

export function SaveMenu({ activeFileId, files, onSave }: SaveMenuProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState("");

  const activeFile = useMemo<FileDef | undefined>(
    () => (activeFileId ? files[activeFileId] : undefined),
    [activeFileId, files],
  );

  const handleSave = () => {
    if (!activeFile) return;

    if (!activeFile.name) {
      // name missing, first save
      open();
      return;
    }

    onSave(activeFile.id);

    notifications.show({
      color: "green",
      title: `Query "${activeFile.name}" successfully saved`,
      message: "",
      withCloseButton: true,
      withBorder: true,
    });

    setValue("");
  };

  const handleSaveAs = (name: string) => {
    if (!activeFile) return;

    onSave(activeFile.id, name);

    notifications.show({
      color: "green",
      title: `Query "${name}" successfully saved`,
      message: "",
      withCloseButton: true,
      withBorder: true,
    });

    setValue("");
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Save as" centered size="md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (value.length === 0) return;
            handleSaveAs(value);
            close();
          }}
        >
          <Input
            data-autofocus
            placeholder="Query title"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            mb="xs"
          />

          <Button fullWidth type="submit" disabled={value.length === 0}>
            Save
          </Button>
        </form>
      </Modal>

      <Menu shadow="md">
        <Menu.Target>
          {/* box wrapper to correctly set the menu position */}
          <Box h="100%">
            <EditorHeaderIconAction
              label="Save query"
              icon={IconDeviceFloppy}
            />
          </Box>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item disabled={!activeFile} onClick={handleSave}>
            Save
          </Menu.Item>
          <Menu.Item disabled={!activeFile} onClick={open}>
            Save as...
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
