import {
  Box,
  Flex,
  Title,
  Text,
  Code,
  Badge,
} from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export function GraphSidebar({ selection, graphNodes, getColorForType }) {
  const selectedNodes = Array.from(selection.selectedNodeIds);

  if (selectedNodes.length === 0) {
    return (
      <Box p="md">
        <Text c="dimmed">No selected elements</Text>
      </Box>
    );
  }

  if (selectedNodes.length > 1) {
    return (
      <Box p="md">
        <Text>Multiple selected elements</Text>
      </Box>
    );
  }

  const objectDetails = graphNodes.find((node) => node.id === selectedNodes[0]);

  return (
  <Box p="md">
      <Flex align="baseline" gap="md">
        <Title order={2} mb="sm">
          {objectDetails.name}
          <Text component="span" c="dimmed" ml="sm">{objectDetails.id}</Text>
        </Title>
      </Flex>
      <Code display="inline-block">Named Node</Code>
      <Flex gap="xs" wrap="wrap" mb="md">
        {objectDetails.types?.map((type) => (
          <Badge key={type} color={getColorForType(type)}>
            {type}
          </Badge>
        ))}
      </Flex>
      {/* {objectDetails.type === "edge" && (
        <>
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
        </>
      )} */}
      <Box mb="md">
        <Title order={4} mb="xs">
          Properties
        </Title>
        <Box>
          {Object.entries(objectDetails.properties || {}).map(([key, value]) => (
            <Box key={key} mb="xs">
              <Title order={6} mb="xs">
                {key}
              </Title>
              <Code block mb="md">{value}</Code>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
