import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Slider,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { useLoaderData } from 'react-router-dom';

const AccordionSetting = ({ title, children, defaultExpanded = false }) => (
  <Accordion
    disableGutters
    square
    variant="outlined"
    elevation={0}
    defaultExpanded={defaultExpanded}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      color="primary"
      sx={{
        fontWeight: 'bold',
        flexDirection: 'row-reverse',
        pl: 1,
        gap: 1,
      }}
    >
      {title}
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

const GraphOptions = React.memo(({clearAll, moveOnBreakpoint = false}) => {
  const modelString = useLoaderData();

  const {
    FORCE_RANGES,
    graphForceLinkDistance,
    setGraphForceLinkDistance,
    graphForceChargeStrength,
    setGraphForceChargeStrength,
    graphForceLinkStrength,
    setGraphForceLinkStrength,
    showGrid,
    setShowGrid,
    showNodeLabels,
    setShowNodeLabels,
    usePrefixes,
    setUsePrefixes,
  } = useUserContext();

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Box
        sx={(theme) => ({
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          zIndex: theme.zIndex.fab + 1,
          top: 16,
          right: 16,
          ...(moveOnBreakpoint && {
            [`${theme.breakpoints.down('md')}`]: {
              top: 88,
            },
          }),
        })}
      >
        {!showSettings && (
          <Tooltip title="Graph Settings" placement="left">
            <IconButton size="large" onClick={() => setShowSettings(true)}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        )}
        {showSettings && (
          <Box
            sx={(theme) => ({
              width: 200,
              position: 'relative',
              userSelect: 'none',
              overflowX: 'hidden',
              overflowY: 'scroll',
              zIndex: theme.zIndex.fab + 2,
              maxHeight: 'calc(100vh - 98px)',
              [`${theme.breakpoints.down('md')}`]: {
                maxHeight: 'calc(100vh - 168px)',
              },
            })}
          >
            <Box
              sx={{
                position: 'absolute',
                right: 7,
                top: 7,
                zIndex: (theme) => theme.zIndex.fab + 2,
              }}
            >
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  setShowSettings(false);
                }}
                size="small"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <AccordionSetting title="Forces" defaultExpanded>
              <Typography gutterBottom variant="body2">
                Link Distance
              </Typography>
              <Box sx={{ px: 1 }}>
                <Slider
                  valueLabelDisplay="auto"
                  size="small"
                  min={FORCE_RANGES.linkDistance.min}
                  max={FORCE_RANGES.linkDistance.max}
                  step={FORCE_RANGES.linkDistance.step}
                  value={graphForceLinkDistance}
                  onChange={(_, value) => setGraphForceLinkDistance(value)}
                />
              </Box>
              <Typography gutterBottom variant="body2">
                Link Force
              </Typography>
              <Box sx={{ px: 1 }}>
                <Slider
                  valueLabelDisplay="auto"
                  size="small"
                  min={FORCE_RANGES.linkStrength.min}
                  max={FORCE_RANGES.linkStrength.max}
                  step={FORCE_RANGES.linkStrength.step}
                  value={graphForceLinkStrength}
                  onChange={(_, value) => setGraphForceLinkStrength(value)}
                />
              </Box>
              <Typography gutterBottom variant="body2">
                Repel Force
              </Typography>
              <Box sx={{ px: 1 }}>
                <Slider
                  valueLabelDisplay="auto"
                  size="small"
                  min={FORCE_RANGES.chargeStrength.min}
                  max={FORCE_RANGES.chargeStrength.max}
                  step={FORCE_RANGES.chargeStrength.step}
                  value={graphForceChargeStrength}
                  onChange={(_, value) => setGraphForceChargeStrength(value)}
                />
              </Box>
            </AccordionSetting>
            <AccordionSetting title="Style">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                }}
              >
                <Typography variant="body2">Grid</Typography>
                <Switch
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                }}
              >
                <Typography variant="body2">Node Labels</Typography>
                <Switch
                  checked={showNodeLabels}
                  onChange={(e) => setShowNodeLabels(e.target.checked)}
                />
              </Box>
              {modelString === 'rdf' && (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                  }}
                >
                  <Typography variant="body2">Use Prefixes</Typography>
                  <Switch
                    checked={usePrefixes}
                    onChange={(e) => setUsePrefixes(e.target.checked)}
                  />
                </Box>
              )}
            </AccordionSetting>
          </Box>
        )}

        <Box sx={{ position: "absolute", right: 0, mt: 7 }}>
          <Tooltip title="Clear All" placement="left">
            <IconButton size="large" onClick={() => clearAll()}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
});

export default GraphOptions;
