import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Switch,
  FormControlLabel,
  Button,
  Paper,
  IconButton,
  type SelectChangeEvent,
} from "@mui/material";
import {
  Close as CloseIcon,
  HelpOutline as HelpOutlineIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";

interface DocsTinderProps {
  onClose?: () => void;
}

const DocumentDetector= () => {
  const [country, setCountry] = useState<string>("");
  const [docType, setDocType] = useState<string>("");
  const [compareOtherCountries, setCompareOtherCountries] =
    useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setDocType(event.target.value);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompareOtherCountries(event.target.checked);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log("File dropped:", e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload logic here
      console.log("File selected:", e.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <Box flexDirection="column" maxWidth={480} mx={"auto"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignContent="flex-start"
      >
        <Typography
          variant="subtitle1"
          fontWeight="fontWeightSemiBold"
          textAlign="left"
        >
          Upload your doc here to run the <br /> generator
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="fontWeightSemiBold"
          textAlign="left"
        >
          To find similar document please choose from list
        </Typography>
      </Box>

      <TextField
        fullWidth
        placeholder="Country/region"
        value={country}
        onChange={handleCountryChange}
        sx={{ mb: 2, mt: 10 }}
        variant="outlined"
      />
      <FormControl fullWidth sx={{ mb: 3, mt: 4 }}>
        <Select
          value={docType}
          onChange={handleTypeChange}
          displayEmpty
          sx={{
            "& .MuiSelect-select": {
              color: docType ? "text.primary" : "text.secondary",
            },
          }}
        >
          <MenuItem value="" disabled>
            <Typography color="text.secondary" textAlign="left">
              Type
            </Typography>
          </MenuItem>
          <MenuItem value="passport">Passport</MenuItem>
          <MenuItem value="id-card">ID Card</MenuItem>
          <MenuItem value="drivers-license">Driver's License</MenuItem>
          <MenuItem value="birth-certificate">Birth Certificate</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Switch
            checked={compareOtherCountries}
            onChange={handleSwitchChange}
            sx={{
              fontWeight: "fontWeightSemiBold",
            }}
          />
        }
        label="Compare to similar documents of other countries as well"
      />
      <Paper
        variant="outlined"
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        sx={{
          p: 4,
          textAlign: "center",
          borderStyle: "dashed",
          borderWidth: 2,
          borderColor: dragActive ? "primary.main" : "grey.300",
          backgroundColor: dragActive ? "action.hover" : "transparent",
          cursor: "pointer",
          mb: 3,
          mt: 10,
          transition: "all 0.2s ease-in-out",
        }}
        onClick={handleBrowseClick}
      >
        <CloudUploadIcon
          sx={{ fontSize: 48, color: "text.secondary", mb: 2 }}
        />
        <Typography variant="body1" mb={1} fontWeight="fontWeightSemiBold">
          Drag file here or{" "}
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            fontWeight="fontWeightSemiBold"
          >
            browse
          </Typography>
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          fontWeight="fontWeightSemiBold"
        >
          Supported file types: PNG or JPG
        </Typography>
        <input
          id="file-input"
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleFileInput}
          style={{ display: "none" }}
        />
      </Paper>

      <Box mt={10} display="flex" alignItems="flex-start">
        <Button variant="contained">Continue</Button>
      </Box>
    </Box>
  );
};

export default DocumentDetector;
