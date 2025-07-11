import { ActionIcon, Tooltip } from "@mantine/core";
import { type ElementType } from "react";
import { type IconProps } from "@tabler/icons-react";

export type FileDef = {
  id: string;
  name: string;
  content: string;
};

type ActionButtonProps = {
  label: string;
  onClick: () => void;
  icon: ElementType<IconProps>;
};

export function EditorHeaderIconAction({
  label,
  onClick,
  icon: Icon,
}: ActionButtonProps) {
  return (
    <Tooltip label={label} openDelay={500}>
      <ActionIcon variant="subtle" color="default" size="md" onClick={onClick}>
        <Icon width="75%" height="75%" />
      </ActionIcon>
    </Tooltip>
  );
}
