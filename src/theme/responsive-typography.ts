//@ts-nocheck
import type { TypographyProps } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// import { Typography } from '@mui/material/styles/createTypography';

const defaultTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: { xs: 0, sm: 576, md: 768, lg: 1280, xl: 1440, xxl: 1920 },
  },
});

const breakpoints = defaultTheme.breakpoints;
// @ts-expect-error - No need to add those extra properties, as they will be picked by default.
const responsiveTypography: TypographyProps = {
  fontFamily:"'Avenir Next World', 'Helvetica Neue', Arial, sans-serif",
  fontWeightSemiBold: 600,
  // Breakpoint-specific typography
  h1: {
    fontSize: '36px', // Small screens
    lineHeight: '51.84px', // 144% of 36px
    [breakpoints.up('md')]: {
      fontSize: '40px', // Medium screens
      lineHeight: '56.4px', // 141% of 40px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '46px', // Large screens
      lineHeight: '63.94px', // 139% of 46px
    },
  },
  h2: {
    fontSize: '32px', // Small screens
    lineHeight: '44.16px', // 138% of 32px
    [breakpoints.up('md')]: {
      fontSize: '36px', // Medium screens
      lineHeight: '51.84px', // 144% of 36px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '40px', // Large screens
      lineHeight: '56.4px', // 141% of 40px
    },
  },
  h3: {
    fontSize: '28px', // Small screens
    lineHeight: '36.12px', // 129% of 28px
    [breakpoints.up('md')]: {
      fontSize: '32px', // Medium screens
      lineHeight: '44.16px', // 138% of 32px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '36px', // Large screens
      lineHeight: '51.84px', // 144% of 36px
    },
  },
  h4: {
    fontSize: '24px', // Small screens
    lineHeight: '30.72px', // 128% of 24px
    [breakpoints.up('md')]: {
      fontSize: '28px', // Medium screens
      lineHeight: '38.64px', // 138% of 28px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '32px', // Large screens
      lineHeight: '44.16px', // 138% of 32px
    },
  },
  h5: {
    fontSize: '22px', // Small screens
    lineHeight: '27.94px', // 127% of 22px
    [breakpoints.up('md')]: {
      fontSize: '26px', // Medium screens
      lineHeight: '37.96px', // 146% of 26px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '28px', // Large screens
      lineHeight: '42.84px', // 153% of 28px
    },
  },
  h6: {
    fontSize: '20px', // Small screens
    lineHeight: '24px', // 120% of 20px
    [breakpoints.up('md')]: {
      fontSize: '24px', // Medium screens
      lineHeight: '37.68px', // 157% of 24px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '26px', // Large screens
      lineHeight: '41.34px', // 159% of 26px
    },
  },
  subtitle1: {
    fontSize: '18px', // Small screens
    lineHeight: '27px', // 150% of 18px
    [breakpoints.up('md')]: {
      fontSize: '20px', // Medium screens
      lineHeight: '31.4px', // 160% of 22px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '22px', // Large screens
      lineHeight: '35.2px', // 160% of 24px
    },
  },
  subtitle2: {
    fontSize: '16px', // Small screens
    lineHeight: '25.12px', // 157% of 16px
    [breakpoints.up('md')]: {
      fontSize: '18px', // Medium screens
      lineHeight: '27px', // 157% of 20px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '20px', // Large screens
      lineHeight: '31.4px', // 157% of 22px
    },
  },
  body1: {
    fontWeight: 400,
    fontSize: '14px', // Small screens
    lineHeight: '21.84px', // 156% of 14px
    [breakpoints.up('md')]: {
      fontSize: '16px', // Medium screens
      lineHeight: '25.2px', // 157% of 16px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '18px', // Large screens
      lineHeight: '28.26px', // 157% of 18px
    },
  },
  body2: {
    fontWeight: 400,
    fontSize: '12px', // Small screens
    lineHeight: '18.72px', // 156% of 12px
    [breakpoints.up('md')]: {
      fontSize: '14px', // Medium screens
      lineHeight: '21.84px', // 156% of 14px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '16px', // Large screens
      lineHeight: '25.2px', // 157% of 16px
    },
  },
  caption1: {
    fontSize: '10px', // Small screens
    lineHeight: '15.6px', // 156% of 10px
    [breakpoints.up('md')]: {
      fontSize: '12px', // Medium screens
      lineHeight: '18.84px', // 157% of 12px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '14px', // Large screens
      lineHeight: '21.84px', // 156% of 14px
    },
  },
  caption2: {
    fontSize: '8px', // Small screens
    lineHeight: '12.64px', // 158% of 8px
    [breakpoints.up('md')]: {
      fontSize: '10px', // Medium screens
      lineHeight: '15.4px', // 154% of 10px
    },
    [breakpoints.up('xxl')]: {
      fontSize: '12px', // Large screens
      lineHeight: '18.96px', // 158% of 12px
    },
  },
};

export default responsiveTypography;
