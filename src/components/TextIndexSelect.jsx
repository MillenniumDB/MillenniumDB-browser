import {
  Box,
  Tooltip,
  IconButton,
  Menu,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  Divider,
  Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import { useUserContext } from '../context/UserContext';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useLoaderData } from 'react-router-dom';

export default function TextIndexSelect() {
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [textIndexes, setTextIndexes] = useState([]);
  const [loading, setLoading] = useState(true);

  const driverContext = useDriverContext();
  const modelString = useLoaderData();
  const {
    selectedTextIndex,
    setSelectedTextIndex,
    selectedSearchBy,
    setSelectedSearchBy,
  } = useUserContext();

  const handleOpenIndexMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseIndexMenu = () => {
    setAnchorElMenu(null);
  };

  const getTextIndexNames = useCallback(
    async () => {
      const catalog = await driverContext.getCatalog();
      const textIndexNames = catalog.getMetadata().textIndexNames;
      setTextIndexes(textIndexNames);
      if (selectedTextIndex === null && selectedSearchBy === null) {
        if (textIndexNames.length > 0) {
          setSelectedTextIndex(textIndexNames[0]);
        } else {
          setSelectedSearchBy("literal");
        }
      }
    },
    [
      driverContext,
      setSelectedTextIndex,
      setSelectedSearchBy,
      selectedTextIndex,
      selectedSearchBy,
    ]
  );

  useEffect(() => {
    if (loading) {
      getTextIndexNames();
      setLoading(false);
    }
  }, [getTextIndexNames, loading]);

  return (
    <Box sx={(theme) => ({
      position: "absolute",
      left: 440,
      zIndex: theme.zIndex.drawer + 1,
      [`${theme.breakpoints.down('md')}`]: {
        left: 'auto',
        right: 14,
      },
    })}>
      <Tooltip title="Select Text Index">
        <IconButton
          sx={{ width: 36, height: 36, ml: 1, mt: 1.4 }}
          onClick={handleOpenIndexMenu}
        >
          <ManageSearchIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElMenu)}
        onClose={handleCloseIndexMenu}
        elevation={0}
      >
        <Card
          variant="outlined"
          sx={{my: -1, py: 1, px: 2, maxWidth: 220, overflowX: 'auto' }}
        >
          <FormControl>
            <RadioGroup>
              {textIndexes.length > 0 && (
                <>
                  <Typography sx={{ mt: 1, fontWeight: 'bold' }}>
                    Search by Text Index
                  </Typography>
                  {textIndexes.map((index) => (
                    <FormControlLabel
                      key={index}
                      value={index}
                      control={<Radio size='small'/>}
                      label={<Typography variant="body2">{index}</Typography>}
                      checked={selectedTextIndex === index}
                      onChange={(e) => {
                        setSelectedTextIndex(e.target.value);
                        setSelectedSearchBy(null);
                        handleCloseIndexMenu();
                      }}
                    />
                  ))}
                  <Divider sx={{ my: 1, width: 'calc(100% + 32px)', mx: -2 }}/>
                </>
              )}
              <Typography sx={{ mt: 1, fontWeight: 'bold' }}>
                Search by
              </Typography>
              <FormControlLabel
                value="literal"
                control={<Radio size='small'/>}
                label={<Typography variant="body2">Literal</Typography>}
                checked={selectedSearchBy === "literal"}
                onChange={(e) => {
                  setSelectedSearchBy(e.target.value);
                  setSelectedTextIndex(null);
                  handleCloseIndexMenu();
                }}
              />
              {modelString === "rdf" && (
                <FormControlLabel
                  value="iri"
                  control={<Radio size='small'/>}
                  label={<Typography variant="body2">IRI</Typography>}
                  checked={selectedSearchBy === "iri"}
                  onChange={(e) => {
                    setSelectedSearchBy(e.target.value);
                    setSelectedTextIndex(null);
                    handleCloseIndexMenu();
                  }}
                />
              )}
            </RadioGroup>
          </FormControl>
        </Card>
      </Menu>
    </Box>
  );
}