import { alpha, IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {type SnackbarAction, type SnackbarKey, SnackbarProvider } from 'notistack';
import { createRef } from 'react';

const StyledSnackbarProvider = styled(SnackbarProvider)(({ theme }) => ({
  '&.SnackbarItem-contentRoot': {
    backgroundColor: theme.palette.grey[700],
  },
  '&.SnackbarItem-variantError': {
    '.MuiSvgIcon-root': {
      color: theme.palette.custom.brandRed400,
    },
  },
  '&.SnackbarItem-variantSuccess': {
    '.MuiSvgIcon-root': {
      color: theme.palette.custom.brandGreen400,
    },
  },
  '&.SnackbarItem-variantInfo': {
    '.MuiSvgIcon-root': {
      color: theme.palette.custom.brandBlue400,
    },
  },
  '&.SnackbarItem-variantWarning': {
    '.MuiSvgIcon-root': {
      color: theme.palette.custom.brandGold400,
    },
  },
  '.MuiSvgIcon-root': {
    marginInlineEnd: theme.spacing(2),
  },
  '.MuiSvgIcon-root[data-testid="CloseIcon"]': {
    color: theme.palette.common.white,
    cursor: 'pointer',
    marginInlineEnd: 0,
  },
}));

const CustomSnackbarProvider = ({ children }: React.PropsWithChildren) => {
  const notistackRef = createRef<SnackbarProvider>();

  // nonstick close handle
  const onClickDismiss = (key: SnackbarKey) => {
    notistackRef.current?.closeSnackbar(key);
  };

  const SnackbarCloseIcon: SnackbarAction = key => (
    <IconButton
      onClick={() => onClickDismiss(key)}
      sx={theme => ({
        '&:hover': {
          backgroundColor: alpha(theme.palette.grey['300'], 0.2),
          color: 'red',
        },
      })}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <StyledSnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      ref={notistackRef}
      autoHideDuration={4000}
      action={SnackbarCloseIcon}
      iconVariant={{
        info: <InfoOutlinedIcon />,
        error: <InfoOutlinedIcon />,
        success: <CheckCircleOutlineIcon />,
        warning: <WarningAmberIcon />,
      }}
    >
      {children}
    </StyledSnackbarProvider>
  );
};

export default CustomSnackbarProvider;