import { Box, Typography } from "@mui/material";

import {
  Close as CloseIcon,
  HelpOutline as HelpOutlineIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";

function Header() {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Typography
        variant="body2"
        fontWeight="fontWeightSemiBold"
        color="text.secondary"
      >
        Docs Tinder
      </Typography>
      <Box gap={4} display="flex" flexDirection="row">
        <HelpOutlineIcon />
        <CloseIcon />
      </Box>
    </Box>
  );
}

export default Header;
