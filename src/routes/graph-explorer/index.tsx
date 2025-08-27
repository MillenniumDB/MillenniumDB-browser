import classes from "./index.module.css";

import { createFileRoute } from "@tanstack/react-router";
import { useMDB } from "@/providers/mdb-provider";
import { Box } from "@mantine/core";
import { MDBGraphExplorer } from "@millenniumdb/graph-explorer";

function GraphExplorerPage() {
  const { driver } = useMDB();

  return (
    <Box className={classes.root}>
      <MDBGraphExplorer
        className={classes.graphExplorer}
        driver={driver}
        initialSettings={{
          searchProperties: window.ENV.SEARCH_PROPERTIES,
        }}
      />
    </Box>
  );
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorerPage,
});
