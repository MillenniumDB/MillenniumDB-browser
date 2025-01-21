import { Box } from '@mui/material';
import ForceGraph2D from 'react-force-graph-2d';
import GraphObjectDetails from '../components/GraphObjectDetails';
import { GraphSearchBar } from '../components/NodeSearchBar';
import GraphOptions from '../components/GraphOptions';
import { Helmet } from 'react-helmet';
import { useGraph } from '../components/GraphProvider';

export default function Graph() {
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
    handleOnNodeClick,
    handleOnBackgroundClick,
    selectedNode,
    setSelectedNode,
    addNodes,
    addConnection,
    removeNodeAndConnections,
    removeConnectionAndNeighbors,
    isNodeInGraphView,
    graphForceLinkDistance,
    setGraphLinkDistance,
    graphForceChargeStrength,
    setGraphForceChargeStrength,
    graphForceLinkStrength,
    setGraphForceLinkStrength,
    showGrid,
    setShowGrid,
    showNodeLabels,
    setShowNodeLabels,
    clearAll,
  } = useGraph();

  return (
    <>
      <Helmet title={`Graph | MillenniumDB`} />
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
        <GraphSearchBar
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
        <GraphObjectDetails
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          addNodes={addNodes}
          addConnection={addConnection}
          removeNodeAndConnections={removeNodeAndConnections}
          removeConnectionAndNeighbors={removeConnectionAndNeighbors}
          isNodeInGraphView={isNodeInGraphView}
        />
        <GraphOptions
          graphForceLinkDistance={graphForceLinkDistance}
          setGraphForceLinkDistance={setGraphLinkDistance}
          graphForceChargeStrength={graphForceChargeStrength}
          setGraphForceChargeStrength={setGraphForceChargeStrength}
          graphForceLinkStrength={graphForceLinkStrength}
          setGraphForceLinkStrength={setGraphForceLinkStrength}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
          showNodeLabels={showNodeLabels}
          setShowNodeLabels={setShowNodeLabels}
          clearAll={clearAll}
          moveOnBreakpoint={true}
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
          onNodeClick={handleOnNodeClick}
          onBackgroundClick={handleOnBackgroundClick}
          // Performance
          warmupTicks={0}
          cooldownTicks={300}
          autoPauseRedraw={true}
        />
      </Box>
    </>
  );
}
