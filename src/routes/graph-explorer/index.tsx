import classes from "./index.module.css";

import { createFileRoute } from "@tanstack/react-router";
import { useMDB } from "@/providers/mdb-provider";
import { Box, Text } from "@mantine/core";
import {
  MQLGraphExplorer,
  SPARQLGraphExplorer,
} from "@millenniumdb/graph-explorer";
import { useEffect, useMemo, useState, type ReactNode } from "react";

function GraphExplorerPage() {
  const { driver } = useMDB();

  const [modelId, setModelId] = useState<number | null>(null);

  useEffect(() => {
    const fetchModelId = async () => {
      const catalog = await driver.catalog();
      setModelId(catalog.getModelId());
    };

    fetchModelId();
  }, [driver]);

  const graphExplorerProps = useMemo(
    () => ({
      className: classes.graphExplorer,
      driver,
      initialSettings: {
        searchKeys: window.ENV.SEARCH_PROPERTIES,
        nameKeys: [],
      },
    }),
    [driver],
  );

  let content: ReactNode;
  switch (modelId) {
    case 0: {
      content = <MQLGraphExplorer {...graphExplorerProps} />;
      break;
    }
    case 1: {
      content = <SPARQLGraphExplorer {...graphExplorerProps} />;
      break;
    }
    default: {
      content = <Text>Graph explorer is not supported for this model</Text>;
      break;
    }
  }

  return <Box className={classes.root}>{content}</Box>;
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorerPage,
});
