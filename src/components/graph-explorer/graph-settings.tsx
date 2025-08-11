import { useEffect, useState } from "react";
import { Modal, Tabs, Title, Text, TextInput, Code, ActionIcon } from "@mantine/core";
import type { GraphConfig } from "@/routes/graph-explorer";
import { useDisclosure } from "@mantine/hooks";
import { IconSettings } from "@tabler/icons-react";

type GraphSettingsProps = {
  config: GraphConfig;
  setGraphConfig: (next: GraphConfig) => void;
};

export default function GraphSettings({
  config,
  setGraphConfig,
}: GraphSettingsProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [nameKeysInput, setNameKeysInput] = useState("");

  useEffect(() => {
    if (opened) {
      setNameKeysInput(config.node.namePropertiesKeys.join(", "));
    }
  }, [opened, config.node.namePropertiesKeys]);

  const parseKeys = (raw: string): string[] =>
    raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const handleClose = () => {
    const nextKeys = parseKeys(nameKeysInput);
    setGraphConfig({
      ...config,
      node: { ...config.node, namePropertiesKeys: nextKeys },
    });
    close();
  };

  return (
    <>
      <ActionIcon
        variant="default"
        onClick={open}
        pos="absolute"
        top="0"
        right="0"
        m="md"
        style={{ zIndex: 'var(--mantine-z-index-modal)' }}
      >
        <IconSettings size={20} />
      </ActionIcon>
      <Modal
        opened={opened}
        onClose={handleClose}
        size="lg"
      >
        <Tabs variant="pills" orientation="vertical" defaultValue="graph">
          <Tabs.List>
            <Tabs.Tab value="graph">Graph</Tabs.Tab>
            <Tabs.Tab value="nodes">Nodes</Tabs.Tab>
            <Tabs.Tab value="edges">Edges</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="graph" ml="md">
            <Title order={3}>Graph settings</Title>
          </Tabs.Panel>

          <Tabs.Panel value="nodes" ml="md">
            <Title order={3} mb="xs">Nodes settings</Title>

            <Title order={4}>Node names</Title>
            <Text size="sm" mb="sm">
              Enter node properties in order of priority, separated by commas. Example: <Code>name, surname, title</Code>. 
              If none of these properties exist on a node, its <Code>id</Code> will be used as a fallback.
            </Text>

            <TextInput
              placeholder="name, surname, title"
              value={nameKeysInput}
              onChange={(e) => setNameKeysInput(e.currentTarget.value)}
            />
          </Tabs.Panel>

          <Tabs.Panel value="edges" ml="md">
            <Title order={3}>Edges settings</Title>
          </Tabs.Panel>
        </Tabs>
      </Modal>
    </>
  );
}