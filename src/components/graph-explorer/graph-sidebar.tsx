import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Title,
  Text,
  Code,
  Badge,
  LoadingOverlay,
} from "@mantine/core";
// import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useMDB } from "@/providers/mdb-provider";
import { fetchNodeDetails } from "@/lib/queries";
import type { NodeDetails } from "@/lib/queries";

type SidebarContentData =
  | { type: "empty" }
  | { type: "multiple" }
  | { type: "notFound" }
  | { type: "error" }
  | { type: "node"; node: NodeDetails }
  | null;

export function GraphSidebar(
  { selectedNodes, getColorForLabel }: {
    selectedNodes: Set<string>;
    getColorForLabel: (label?: string) => string;
  }
) {
  const { driver } = useMDB();

  const [content, setContent] = useState<SidebarContentData>(null);
  const [loading, setLoading] = useState(false);

  const selectedNodeId = [...selectedNodes][0];

  useEffect(() => {
    if (selectedNodes.size === 0) {
      setContent({ type: "empty" });
      return;
    }
    if (selectedNodes.size > 1) {
      setContent({ type: "multiple" });
      return;
    }
    if (selectedNodeId) {
      setLoading(true);

      fetchNodeDetails(driver, selectedNodeId)
        .then((details) => {
          if (!details) {
            setContent({ type: "notFound" });
          } else {
            console.log("Node details:", details);
            setContent({ type: "node", node: details });
          }
        })
        .catch((err) => {
          console.error("Error fetching node details:", err);
          setContent({ type: "error" });
        })
        .finally(() => setLoading(false));
    }
  }, [selectedNodes, selectedNodeId, driver]);

  return (
    <Box pos="relative" style={{ height: "100%", overflowY: "auto" }}>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ blur: 2 }}
      />
      <SidebarContent
        content={content}
        getColorForLabel={getColorForLabel}
      />
    </Box>
  );
}

function SidebarContent({
  content,
  getColorForLabel,
}: {
  content: SidebarContentData;
  getColorForLabel: (label: string) => string;
}) {
  if (!content) {
    return null;
  }
  if (content.type === "empty") {
    return <Text c="dimmed" p="md">No nodes selected</Text>;
  }
  if (content.type === "multiple") {
    return <Text c="dimmed" p="md">Multiple nodes selected</Text>;
  }
  if (content.type === "notFound") {
    return <Text c="dimmed" p="md">Node not found</Text>;
  }
  if (content.type === "error") {
    return <Text c="dimmed" p="md">Error fetching node details</Text>;
  }
  if (content.type === "node") {
    const { node } = content;
    return (
      <Box p="md">
        <Flex align="baseline" gap="md">
          <Title order={2} mb="sm">
            {node.name}
            <Text component="span" c="dimmed" ml="sm">
              {node.id}
            </Text>
          </Title>
        </Flex>
        <Code display="inline-block">{node.type}</Code>
        <Flex gap="xs" wrap="wrap" mb="md">
          {(node.labels ?? []).map((label) => (
            <Badge key={label} color={getColorForLabel(label)}>
              {label}
            </Badge>
          ))}
        </Flex>
        <Box mb="md">
          <Title order={4} mb="xs">
            Properties
          </Title>
          {Object.keys(node.properties ?? {}).length === 0 ? (
            <Text>No properties available</Text>
          ) : (
            Object.entries(node.properties!).map(([key, value]) => (
              <Box key={key} mb="xs">
                <Title order={6} mb="xs">
                  {key}
                </Title>
                <Code block mb="md">{String(value)}</Code>
              </Box>
            ))
          )}
        </Box>
      </Box>
    );
  }
}



{/* <>
  <Code display="inline-block">Edge</Code>
  <Flex align="center" mb="md">
    <Badge color="var(--mantine-color-gray-6)">
      {objectDetails.data.source.name}
    </Badge>
    <IconArrowNarrowRight
      color="var(--mantine-color-gray-4)"
      size={20}
      style={{ flexShrink: 0 }}
    />
    <Badge color="var(--mantine-color-gray-6)">
      {objectDetails.data.target.name}
    </Badge>
  </Flex>
</> */}
