import {  darken, type ThemeOptions } from '@mui/material';
import themeConstants, { defaultTheme } from './theme-constants';


const components: ThemeOptions['components'] = {
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: themeConstants.palette.grey[50],
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: defaultTheme.spacing(8),
      },
    },
  },
  MuiDialog: {
    defaultProps: { fullWidth: true, maxWidth: 'xs' },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        margin: defaultTheme.spacing(2, 0),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        borderRadius: defaultTheme.spacing(1),
        '&:before': {
          height: 0,
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: defaultTheme.spacing(0, 3),
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: defaultTheme.spacing(2, 3),
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        fontSize: themeConstants.typography?.body2?.fontSize,
      },
      listbox: {
        '& .MuiAutocomplete-option': {
          color: themeConstants.palette.text.secondary,
          '&[aria-selected="true"]': {
            backgroundColor: themeConstants.palette.grey[100],
          },
          '&.Mui-focused[aria-selected="true"]': {
            backgroundColor: themeConstants.palette.grey[100],
          },
          '&.Mui-focused': {
            backgroundColor: themeConstants.palette.grey[200],
          },
        },
      },
      inputRoot: {
        paddingTop: '5px !important',
        paddingBottom: '5px !important',
        maxHeight: 'none',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '8px 24px 16px',
      },
      spacing: {
        '&>:not(:first-child)': {
          marginLeft: defaultTheme.spacing(4),
        },
      },
    },
  },
  MuiPickersMonth: {
    styleOverrides: {
      monthButton: {
        fontSize: `${themeConstants.typography?.body1?.fontSize} !important`,
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'hover',
    },
    styleOverrides: {
      root: {
        ...themeConstants.typography.body2,
        fontWeight: defaultTheme.typography.fontWeightMedium,
        '&:hover': {
          color: themeConstants.palette.custom.brandBlue600,
        },
        '& .MuiTypography-root': {
          ...themeConstants.typography.body2,
          fontWeight: defaultTheme.typography.fontWeightMedium,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        ...themeConstants.typography.body2,
        fontWeight: "600",
        wordBreak: 'break-word',
        textTransform: 'none',
        minHeight: defaultTheme.spacing(10),
        padding: `${defaultTheme.spacing(2)} ${defaultTheme.spacing(4)}`,
        minWidth: defaultTheme.spacing(20),
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      sizeSmall: {
        ...themeConstants.typography?.caption,
        minHeight: defaultTheme.spacing(7),
        padding: `${defaultTheme.spacing(1)} ${defaultTheme.spacing(2)}`,
        minWidth: defaultTheme.spacing(15),
      },
      sizeLarge: {
        ...themeConstants.typography?.body1,
        padding: `${defaultTheme.spacing(3)} ${defaultTheme.spacing(6)}`,
        minWidth: defaultTheme.spacing(30),
      },
      containedPrimary: {
        color: defaultTheme.palette.common.white,
        background: themeConstants.palette.gradient.button,
        '&:hover': {
          background: themeConstants.palette.gradient.buttonHover,
        },
        '&.Mui-disabled': {
          background: themeConstants.palette.grey['200'],
          color: themeConstants.palette.grey['500'],
        },
      },
      outlinedSecondary: {
        '&.Mui-disabled': {
          color: themeConstants.palette.grey['500'],
          borderColor: themeConstants.palette.grey[500],
        },
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        '&.MuiMenuItem-root': {
          color: themeConstants.palette.text.secondary,
          fontSize: themeConstants.typography?.body1?.fontSize,
          '&.Mui-selected': {
            backgroundColor: themeConstants.palette.grey[100],
            ':hover': {
              backgroundColor: themeConstants.palette.grey[100],
            },
          },
          ':hover': {
            backgroundColor: themeConstants.palette.grey[200],
          },
        },
        '&.MuiButtonBase-root.MuiListItem-root': {
          color: themeConstants.palette.text.secondary,
        },
      },
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '& .MuiButton-containedPrimary:nth-child(1)': {
          background: themeConstants.palette.gradient.button,
          borderColor: themeConstants.palette.text.tertiary,
          '&:hover': {
            background: themeConstants.palette.gradient.buttonHover,
          },
          '&.Mui-disabled': {
            background: themeConstants.palette.grey['200'],
            color: themeConstants.palette.grey['500'],
          },
        },
        '& .MuiButton-containedPrimary:nth-child(2)': {
          background: themeConstants.palette.custom.brandBlue500,
          '&:hover': {
            background: themeConstants.palette.gradient.buttonHover,
          },
          '&.Mui-disabled': {
            background: themeConstants.palette.grey['200'],
            color: themeConstants.palette.grey['500'],
          },
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: defaultTheme.spacing(2),
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: defaultTheme.spacing(6),
        '&:last-child': {
          paddingBottom: defaultTheme.spacing(6),
        },
      },
    },
  },
  MuiCardActionArea: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  //@ts-ignore
  MuiCalendarPicker: {
    styleOverrides: {
      root: {
        '& .PrivatePickersFadeTransitionGroup-root': {
          '& .PrivatePickersSlideTransition-root': {
            minHeight: defaultTheme.spacing(45),
          },
        },
      },
    },
  },
  MuiChip: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        height: defaultTheme.spacing(6),
      },
      sizeMedium: {
        height: defaultTheme.spacing(9),
        borderRadius: '40px',
      },
      label: {
        padding: `${defaultTheme.spacing(1)} ${defaultTheme.spacing(2)}`,
        lineHeight: 'normal !important',
      },
      labelSmall: {
        ...themeConstants.typography?.caption,
      },
      labelMedium: {
        ...themeConstants.typography?.body2,
        padding: `${defaultTheme.spacing(2)} ${defaultTheme.spacing(4)}`,
      },
      //@ts-ignore
      filledDefault: {
        backgroundColor: themeConstants.palette.grey[100],
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(themeConstants.palette.grey[100], 0.03),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.grey[300],
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.grey[300],
          },
        },
      },
      filledSuccess: {
        backgroundColor: themeConstants.palette.custom.brandGreen200,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandGreen200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandGreen300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandGreen300,
          },
        },
        '& > .MuiChip-deleteIconFilledColorSuccess': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.custom.brandGreen700, 0.3),
          },
        },
      },
      filledError: {
        backgroundColor: themeConstants.palette.custom.brandRed200,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandRed200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandRed300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandRed300,
          },
        },
        '& > .MuiChip-deleteIconFilledColorError': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.custom.brandRed700, 0.3),
          },
        },
      },
      filledInfo: {
        backgroundColor: themeConstants.palette.custom.brandBlue200,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandBlue200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandBlue300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandBlue300,
          },
        },
        '& .MuiChip-deleteIconFilledColorInfo': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.custom.brandBlue700, 0.3),
          },
        },
      },
      filledWarning: {
        backgroundColor: themeConstants.palette.custom.brandGold200,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandGold200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandGold300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandGold300,
          },
        },
        '& > .MuiChip-deleteIconFilledColorWarning': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.custom.brandGold700, 0.3),
          },
        },
      },
      filledPurple: {
        backgroundColor: themeConstants.palette.custom.brandPurple200,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandPurple200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandPurple300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandPurple300,
          },
        },
        '& > .MuiChip-deleteIconFilledColorPurple': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.custom.brandPurple700, 0.3),
          },
        },
      },
      filledPink: {
        backgroundColor: themeConstants.palette.custom.brandPink200,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandPink200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandPink300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandPink300,
          },
        },
        '& > .MuiChip-deleteIconFilledColorCoralRed': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.custom.brandPink700, 0.3),
          },
        },
      },
      filledBlueberry: {
        backgroundColor: themeConstants.palette.custom.brandBlueberry200,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandBlueberry200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandBlueberry300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandBlueberry300,
          },
        },
        '& > .MuiChip-deleteIconFilledColorBlueberry': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.custom.brandBlueberry700, 0.3),
          },
        },
      },
      outlinedDefault: {
        borderColor: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(themeConstants.palette.grey[100], 0.03),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.grey[300],
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.grey[300],
          },
        },
        '& > .MuiChip-deleteIconOutlinedColorSuccess': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
      outlinedSuccess: {
        borderColor: themeConstants.palette.custom.brandGreen700,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandGreen200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandGreen300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandGreen300,
          },
        },
        '& > .MuiChip-deleteIconOutlinedColorSuccess': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
      outlinedError: {
        borderColor: themeConstants.palette.custom.brandRed700,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandRed200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandRed300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandRed300,
          },
        },
        '& > .MuiChip-deleteIconOutlinedColorError': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
      outlinedInfo: {
        borderColor: themeConstants.palette.custom.brandBlue700,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandBlue200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandBlue300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandBlue300,
          },
        },
        '& .MuiChip-deleteIconOutlinedColorInfo': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
      outlinedWarning: {
        borderColor: themeConstants.palette.custom.brandGold700,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandGold200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandGold300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandGold300,
          },
        },
        '& > .MuiChip-deleteIconOutlinedColorWarning': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
      outlinedPurple: {
        borderColor: themeConstants.palette.custom.brandPurple700,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandPurple200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandPurple300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandPurple300,
          },
        },
        '& > .MuiChip-deleteIconOutlinedColorPurple': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
      outlinedPink: {
        borderColor: themeConstants.palette.custom.brandPink700,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandPink200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandPink300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandPink300,
          },
        },
        '& > .MuiChip-deleteIconOutlinedColorCoralRed': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
      outlinedBlueberry: {
        borderColor: themeConstants.palette.custom.brandBlueberry700,
        color: themeConstants.palette.grey[700],
        '&.MuiChip-clickable': {
          '&:hover': {
            backgroundColor: darken(
              themeConstants.palette.custom.brandBlueberry200,
              0.03,
            ),
          },
        },
        '&.Mui-focusVisible': {
          color: themeConstants.palette.custom.brandBlueberry300,
          '& > .MuiChip-deleteIcon': {
            color: themeConstants.palette.custom.brandBlueberry300,
          },
        },
        '& > .MuiChip-deleteIconOutlinedColorCoralRed': {
          color: themeConstants.palette.grey[700],
          '&:hover': {
            color: darken(themeConstants.palette.grey[700], 0.3),
          },
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        ...themeConstants.typography?.body1,
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        ...themeConstants.typography?.caption,
        color: themeConstants.palette.text.secondary,
        marginLeft: 0,
        marginTop: defaultTheme.spacing(1),
        '&.Mui-error': {
          marginTop: 3,
        },
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '24px',
        '&:first-child': {
          paddingTop: 0,
        },
        color: themeConstants.palette.text?.secondary,
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        ...themeConstants.typography?.body2,
        fontWeight: "600",
        '&.Mui-error': {
          color: themeConstants.palette.error?.main,
        },
      },
      asterisk: {
        color: themeConstants.palette.error?.main,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: themeConstants.palette.text.primary,
        '&:hover': {
          backgroundColor: themeConstants.palette.grey[200],
        },
      },
      colorSecondary: {
        color: defaultTheme.palette.common.white,
        '&:hover': {
          backgroundColor: themeConstants.palette.grey[300],
        },
      },
      sizeSmall: {
        padding: defaultTheme.spacing(1),
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: ({ themeConstants, ownerState }) => ({
        backgroundColor:
          themeConstants.palette[ownerState.color || ownerState.severity || 'info']
            .background,
      }),
      standardError: {
        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            fill: themeConstants.palette.custom.brandRed400,
          },
        },
      },
      standardSuccess: {
        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            fill: themeConstants.palette.custom.brandGreen400,
          },
        },
      },
      standardInfo: {
        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            fill: themeConstants.palette.custom.brandBlue400,
          },
        },
      },
      standardWarning: {
        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            fill: themeConstants.palette.custom.brandGold400,
          },
        },
      },
      action: {
        alignItems: 'center',
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
          {
            display: 'none',
          },
        '& input[type=number]': {
          MozAppearance: 'textfield',
        },
        '&:hover': {
          '&:not(.Mui-disabled):before': {
            borderBottomWidth: 1,
          },
        },
        '&.Mui-focused': {
          '&:after': {
            borderBottomWidth: 1,
          },
        },
        '&.Mui-disabled': {
          '&:before': {
            borderBottomStyle: 'solid',
            borderBottomColor: themeConstants.palette.grey[300],
          },
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: themeConstants.palette.text.primary,
      },
      input: {
        ...themeConstants.typography?.body1,
        color: themeConstants.palette.text.primary,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        ...themeConstants.typography?.body2,
        height: defaultTheme.spacing(12),
        '&.Mui-disabled': {
          backgroundColor: themeConstants.palette.grey[50],
        },
      },
      input: {
        ...themeConstants.typography?.body2,
      },
      multiline: {
        height: 'auto',
      },
    },
  },

  MuiRadio: {
    styleOverrides: {
      root: {
        '&.Mui-checked': {
          color: themeConstants.palette.custom.brandPurple600,
        },
        '&.Mui-disabled': {
          color: themeConstants.palette.grey[300],
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        '&.Mui-checked': {
          color: themeConstants.palette.custom.brandPurple600,
        },
        '&.Mui-disabled': {
          color: themeConstants.palette.grey[300],
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      switchBase: {
        '& + .MuiSwitch-track': {
          backgroundColor: themeConstants.palette.grey[600],
        },
        '&.Mui-disabled': {
          '& + .MuiSwitch-track': {
            backgroundColor: themeConstants.palette.grey[300],
          },
          '& .MuiSwitch-thumb': {
            color: themeConstants.palette.grey[100],
          },
        },
        '&.Mui-checked': {
          color: themeConstants.palette.custom.brandPurple600,
          '& + .MuiSwitch-track': {
            backgroundColor: themeConstants.palette.custom.brandPurple600,
          },
        },
        '&.Mui-checked.Mui-disabled': {
          '& + .MuiSwitch-track': {
            backgroundColor: themeConstants.palette.custom.brandPurple300,
          },
          '& .MuiSwitch-thumb': {
            color: themeConstants.palette.custom.brandPurple100,
          },
        },
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      outlined: {
        borderColor: themeConstants.palette?.grey[100],
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      root: {
        color: themeConstants.palette.text.secondary,
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        width: defaultTheme.spacing(6),
        height: defaultTheme.spacing(6),
        '&.MuiStepIcon-root': {
          color: themeConstants.palette.grey[500],
        },
      },
      fontSizeSmall: {
        width: defaultTheme.spacing(4.5),
        height: defaultTheme.spacing(4.5),
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        backgroundColor: themeConstants.palette.custom.brandPurple600,
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...themeConstants.typography?.body2,
        borderBottom: `1px solid ${themeConstants.palette.grey[50]}`,
        // This will be changed to minWidth props support, once MUI give the support of omitting forward props
        // Or try to handle via `width` CSS property.
        // Https://github.com/mui/material-ui/issues/39499
        // https://github.com/mui/material-ui/issues/34831
        minWidth: (ownerState['data-min-width'] as string) || 'auto',
      }),
      body: {
        color: themeConstants.palette.text.primary,
      },
      head: {
        ...themeConstants.typography?.caption,
        backgroundColor: themeConstants.palette.grey[50],
        fontWeight: 600,
        padding: '12px 16px',
        color: themeConstants.palette.text.primary,
        borderBottom: 'none',
        ':first-child': {
          borderTopLeftRadius: defaultTheme.spacing(2),
          borderBottomLeftRadius: defaultTheme.spacing(2),
        },
        ':last-child': {
          borderTopRightRadius: defaultTheme.spacing(2),
          borderBottomRightRadius: defaultTheme.spacing(2),
        },
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        height: '100%',
      },
    },
  },

  MuiContainer: {
    styleOverrides: {
      root: {
        '@media (min-width:600px)': {
          paddingLeft: defaultTheme.spacing(6),
          paddingRight: defaultTheme.spacing(6),
        },
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        '&.MuiTableRow-hover': {
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        '&[tabindex="0"]:focus': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        padding: `${defaultTheme.spacing(1.5)} ${defaultTheme.spacing(4)}`,
        textTransform: 'capitalize',
        border: `1px solid ${themeConstants.palette.primary.main} !important`,
        borderRadius: defaultTheme.spacing(1),
        maxHeight: defaultTheme.spacing(9),
      },
      sizeSmall: {
        ...themeConstants.typography?.caption,
        fontWeight: 500,
        minHeight: defaultTheme.spacing(7),
        padding: `${defaultTheme.spacing(1)} ${defaultTheme.spacing(2)}`,
      },
    },
  },

  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      tooltip: {
        backgroundColor: themeConstants.palette.text.primary,
        color: defaultTheme.palette.common.white,
        '& .MuiLink-root': {
          color: themeConstants.palette.primary.main,
        },
        '& .MuiTypography-root': {
          color: defaultTheme.palette.common.white,
        },
        ...themeConstants.typography?.caption,
      },
      arrow: {
        '&:before': {
          backgroundColor: themeConstants.palette.text.primary,
        },
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      variant: 'body2',
    },
    styleOverrides: {
      root: {
        color: themeConstants.palette.text.primary,
      },
      gutterBottom: {
        marginBottom: '0.5rem',
      },
    },
  },
  MuiPickersYear: {
    styleOverrides: {
      yearButton: {
        fontSize: themeConstants.typography?.body2?.fontSize,
        color: themeConstants.palette.text.secondary,
        '@media (max-width:1440px)': { fontSize: '1.15rem' },
      },
    },
  },
};

export default components;
