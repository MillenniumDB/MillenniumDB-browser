import { IconSearch, IconStar, IconTrash } from "@tabler/icons-react";
import { EditorHeaderIconAction } from "./editor-header-icon-action";
import type { FileDef } from "@/hooks/use-file-manager";
import { Spotlight, spotlight } from "@mantine/spotlight";
import { useMemo, useState } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";

type MyQueriesProps = {
  persistedFiles: Record<string, FileDef>;
  onSelectQuery: (id: string) => void;
  onDeleteQuery: (id: string) => void;
};

export function MyQueries({
  persistedFiles,
  onSelectQuery,
  onDeleteQuery,
}: MyQueriesProps) {
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    return Object.values(persistedFiles)
      .filter((f) => {
        const normalizedQuery = query.toLowerCase().trim();
        const normalizedName = f.name.toLowerCase().trim();
        const normalizedContent = f.content.toLowerCase().trim();
        return (
          normalizedName.includes(normalizedQuery) ||
          normalizedContent.includes(normalizedQuery)
        );
      })
      .map((f) => (
        <Spotlight.Action
          key={f.id}
          label={f.name}
          description={f.content}
          onClick={() => onSelectQuery(f.id)}
          rightSection={
            <Tooltip label="Delete" zIndex={"var(--mantine-z-index-max)"}>
              <ActionIcon
                component="div"
                variant="subtle"
                color="var(--mantine-color-bright)"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteQuery(f.id);
                }}
              >
                <IconTrash />
              </ActionIcon>
            </Tooltip>
          }
        />
      ));
  }, [onSelectQuery, onDeleteQuery, persistedFiles, query]);

  return (
    <>
      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search
          placeholder="Search..."
          leftSection={<IconSearch stroke={1.5} />}
        />
        <Spotlight.ActionsList>
          {items.length > 0 ? (
            items
          ) : (
            <Spotlight.Empty>No queries found</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>

      <EditorHeaderIconAction
        label="My queries"
        icon={IconStar}
        onClick={spotlight.open}
      />
    </>
  );
}
