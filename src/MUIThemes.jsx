import { createTheme } from '@mui/material/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const common = {
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          button: {
            borderRadius: 0,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
};

export const MUIThemeDark = createTheme({
  ...common,
  palette: {
    mode: 'dark',
    primary: {
      main: '#fbbf24',
    },
    secondary: {
      main: '#22d3ee',
    },
  },
});

export const MUIThemeLight = createTheme({
  ...common,
  palette: {
    mode: 'light',
    primary: {
      main: '#d97706',
    },
    secondary: {
      main: '#0891b2',
    },
  },
});
