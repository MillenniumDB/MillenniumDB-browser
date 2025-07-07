import classes from "./index.module.css";

import { Box } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { DataTable } from "../components/data-table";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box className={classes.root}>
      <Box className={classes.editor}>Editor</Box>
      <Box className={classes.results}>
        <DataTable />
      </Box>
    </Box>
  );
}
