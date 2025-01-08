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
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import { useUserContext } from '../context/UserContext';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default function TextIndexSelect() {
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [textIndexes, setTextIndexes] = useState(null);

  const driverContext = useDriverContext();
  const { selectedTextIndex, setSelectedTextIndex } = useUserContext();

  const handleOpenIndexMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseIndexMenu = () => {
    setAnchorElMenu(null);
  };

  const getTextIndexNames = useCallback(async () => {
    const catalog = await driverContext.getCatalog();
    const textIndexNames = catalog.getMetadata().textIndexNames;
    setTextIndexes(textIndexNames);
    if (![...textIndexNames, ''].includes(selectedTextIndex)) {
      setSelectedTextIndex(textIndexNames.length > 0 ? textIndexNames[0] : '');
    }
  }, [driverContext, selectedTextIndex, setSelectedTextIndex]);

  useEffect(() => {
    getTextIndexNames();
  }, [getTextIndexNames]);

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
        <Card variant="outlined" sx={{ my: -1, py: 1 }}>
          <FormControl sx={{ pl: 2, maxWidth: 200, overflowX: 'auto' }}>
            <RadioGroup
              onChange={(e) => {
                setSelectedTextIndex(e.target.value);
                setAnchorElMenu(null);
              }}
            >
              {textIndexes && textIndexes.map((index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio size='small'/>}
                  label={index}
                  checked={selectedTextIndex === index}
                />
              ))}
              <FormControlLabel
                value={''}
                control={<Radio size='small'/>}
                label={'None'}
                checked={selectedTextIndex === ''}
              />
            </RadioGroup>
          </FormControl>
        </Card>
      </Menu>
    </Box>
  );
}