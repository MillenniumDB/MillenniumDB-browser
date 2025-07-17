// TODO: key error

import { IconSearch, IconStar } from "@tabler/icons-react";
import { EditorHeaderIconAction } from "./editor-header-icon-action";
import type { FileDef } from "@/hooks/use-file-manager";
import {
  Spotlight,
  spotlight,
  type SpotlightActionData,
} from "@mantine/spotlight";
import { useMemo } from "react";

type MyQueriesProps = {
  persistedFiles: Record<string, FileDef>;
  onSelectQuery: (id: string) => void;
};

export function MyQueries({ persistedFiles, onSelectQuery }: MyQueriesProps) {
  const actions = useMemo<SpotlightActionData[]>(() => {
    return Object.values(persistedFiles).map((f) => ({
      id: f.id,
      label: f.name,
      description: f.content,
      onClick: () => onSelectQuery(f.id),
    }));
  }, [onSelectQuery, persistedFiles]);

  return (
    <>
      <Spotlight
        actions={actions}
        nothingFound="No queries found"
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: "Search a query...",
        }}
      />

      <EditorHeaderIconAction
        label="My queries"
        icon={IconStar}
        onClick={spotlight.open}
      />
    </>
  );
}
