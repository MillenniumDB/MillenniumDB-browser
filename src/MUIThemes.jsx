import { createTheme } from '@mui/material/styles';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const common = {
  components: {
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
      main: '#d5971a',
    },
    secondary: {
      main: '#49ace9',
    },
  },
});

export const MUIThemeLight = createTheme({
  ...common,
  palette: {
    mode: 'light',
    primary: {
      main: '#d5971a',
    },
    secondary: {
      main: '#49ace9',
    },
  },
});
