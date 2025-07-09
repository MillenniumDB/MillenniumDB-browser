import { Box, Text, Title, Divider, Stack } from "@mantine/core";

type DataItem = {
  label: string;
  value: React.ReactNode;
};

type DataListProps = {
  title?: string;
  items: DataItem[];
};

export function DataList({ title, items }: DataListProps) {
  return (
    <Box>
      {title && (
        <>
          <Title order={4} mb="xs">
            {title}
          </Title>
          <Divider mb="sm" />
        </>
      )}
      <Stack gap="xs">
        {items.map(({ label, value }) => (
          <Box
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              lineHeight: 1.4,
            }}
          >
            <Text c="dimmed" style={{ flex: 1 }}>
              {label}
            </Text>
            <Text style={{ flex: 2, textAlign: "right" }}>{value}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
