import { Box } from '@mui/material';
import ForceGraph2D from 'react-force-graph-2d';
import GraphOptions from '../components/GraphOptions';
import PathsSearch from '../components/PathsSearch';
import { Helmet } from 'react-helmet';
import { useGraph } from '../components/GraphProvider';

export default function Paths() {
  const {
    ref,
    graphRef,
    graphData,
    width,
    height,
    graphColorSettings,
    graphSizeSettings,
    NodeCanvasObject,
    handleLinkColor,
    handleOnNodeHover,
    handleRenderFramePre,
    handleOnZoom,
    setSelectedNodesIds,
    addNodes,
    addConnection,
    clearAll,
  } = useGraph();

  return (
    <>
      <Helmet title={`Paths | MillenniumDB`} />
      <Box
        ref={ref}
        sx={(theme) => ({
          height: 'calc(100vh - 56px)',
          [`${theme.breakpoints.up('sm')}`]: {
            height: 'calc(100vh - 64px)',
          },
          [`${theme.breakpoints.up('xs')}`]: {
            '@media (orientation: landscape)': {
              height: 'calc(100vh - 48px)',
            },
          },
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
        })}
      >
        <PathsSearch
          addNodes={addNodes}
          addConnection={addConnection}
          clearAll={clearAll}
          setSelectedNodesIds={setSelectedNodesIds}
        />
        <GraphOptions
          clearAll={clearAll}
        />
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          width={width}
          height={height}
          backgroundColor={graphColorSettings.backgroundColor}
          maxZoom={graphSizeSettings.maxZoom}
          minZoom={graphSizeSettings.minZoom}
          // Nodes
          nodeRelSize={graphSizeSettings.nodeRelSize}
          nodeVal={graphSizeSettings.nodeVal}
          nodeColor={null}
          nodeLabel={null}
          nodeCanvasObject={NodeCanvasObject}
          nodeCanvasObjectMode={() => 'replace'}
          // Links
          linkDirectionalArrowLength={(link) =>
            link.source.isEdge ? graphSizeSettings.arrowSize : 0
          }
          linkDirectionalArrowRelPos={1}
          linkColor={handleLinkColor}
          linkWidth={graphSizeSettings.linkWidth}
          linkCurvature="curvature"
          // Events
          onNodeHover={handleOnNodeHover}
          onRenderFramePre={handleRenderFramePre}
          onZoom={handleOnZoom}
          // Performance
          warmupTicks={0}
          cooldownTicks={300}
          autoPauseRedraw={true}
        />
      </Box>
    </>
  );
}
