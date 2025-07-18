import { IconDeviceFloppy } from "@tabler/icons-react";
import { EditorHeaderIconAction } from "./editor-header-icon-action";
import type { FileDef } from "@/hooks/use-file-manager";
import { Menu, Box, TextInput, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { useMemo } from "react";
import { notifications } from "@mantine/notifications";
import { useForm } from "@mantine/form";

// TODO: optionally overwrite

type SaveMenuProps = {
  files: Record<string, FileDef>;
  activeFileId?: string;
  onSave: (id: string, name?: string) => void;
};

export function SaveMenu({ activeFileId, files, onSave }: SaveMenuProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    // validateInputOnChange: true,
    initialValues: { name: "" },

    validate: {
      name: (value) => {
        if (value.length === 0) {
          return "Must not be empty";
        }

        if (value.trimStart() !== value) {
          return "Must not start with whitespaces";
        }

        if (value.trimEnd() !== value) {
          return "Must not end with whitespaces";
        }

        return null;
      },
    },
  });

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
  };

  const handleSubmit = (values: { name: string }) => {
    const { name } = values;
    handleSaveAs(name);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Save as" centered size="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Query name"
            placeholder="Query name"
            key={form.key("name")}
            {...form.getInputProps("name")}
            data-autofocus
            mb="xs"
          />
          <Button fullWidth type="submit">
            Save
          </Button>
        </form>
      </Modal>

      <Menu shadow="md">
        <Menu.Target>
          {/* box wrapper to correctly set the menu position */}
          <Box
            h="100%"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EditorHeaderIconAction
              label="Save query"
              icon={IconDeviceFloppy}
            />
          </Box>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item disabled={activeFile === undefined} onClick={handleSave}>
            Save
          </Menu.Item>
          <Menu.Item disabled={activeFile === undefined} onClick={open}>
            Save as...
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
