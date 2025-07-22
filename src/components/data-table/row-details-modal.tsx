import { Code, Modal, Stack, Text } from "@mantine/core";
import { MDBValueToString } from "./mdb-process-csv";

export type DetailsEntry = {
  field: string;
  value: unknown;
};

type RowDetailsModalProps = {
  detailsData: DetailsEntry[];
  opened: boolean;
  close: () => void;
};

export function RowDetailsModal({
  detailsData,
  opened,
  close,
}: RowDetailsModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Row details"
      size="lg"
      centered
    >
      <Stack gap="sm">
        {detailsData.map(({ field, value }, idx) => (
          <Stack key={idx} gap="xs">
            <Text fw="bold">{field}</Text>
            <Code block>{MDBValueToString(value)}</Code>
          </Stack>
        ))}
      </Stack>
    </Modal>
  );
}
