import React, { useState } from 'react';
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
} from '@mui/material';
import {
  Close as CloseIcon,
  HelpOutline as HelpOutlineIcon,
  CloudUpload as CloudUploadIcon,
} from '@mui/icons-material';

interface DocsTinderProps {
  onClose?: () => void;
}

const DocumentUpload: React.FC<DocsTinderProps> = ({ onClose }) => {
  const [country, setCountry] = useState<string>('');
  const [docType, setDocType] = useState<string>('');
  const [compareOtherCountries, setCompareOtherCountries] = useState<boolean>(false);
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
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log('File dropped:', e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload logic here
      console.log('File selected:', e.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput?.click();
  };
  return null

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        mx: 'auto',
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        position: 'relative',
      }}
    >
      {/* Form Fields */}
      <Box sx={{ mb: 4 }}>

        {/* Toggle Switch */}
        <FormControlLabel
          control={
            <Switch
              checked={compareOtherCountries}
              onChange={handleSwitchChange}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#6366f1',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#6366f1',
                },
              }}
            />
          }
          label="Compare to similar documents of other countries as well"
          sx={{ 
            '& .MuiFormControlLabel-label': { 
              fontSize: '0.875rem',
              color: 'text.primary'
            } 
          }}
        />
      </Box>

      {/* File Upload Area */}
      <Paper
        variant="outlined"
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        sx={{
          p: 4,
          textAlign: 'center',
          borderStyle: 'dashed',
          borderWidth: 2,
          borderColor: dragActive ? 'primary.main' : 'grey.300',
          backgroundColor: dragActive ? 'action.hover' : 'transparent',
          cursor: 'pointer',
          mb: 3,
          transition: 'all 0.2s ease-in-out',
        }}
        onClick={handleBrowseClick}
      >
        <CloudUploadIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
        <Typography variant="body1" sx={{ mb: 1, color: 'text.primary' }}>
          Drag file here or{' '}
          <Typography
            component="span"
            sx={{ color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' }}
          >
            browse
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Supported file types: PNG or JPG
        </Typography>
        <input
          id="file-input"
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />
      </Paper>

      <Button
        variant="contained"
        fullWidth
      >
        Continue
      </Button>
    </Box>
  );
};

export default DocumentUpload;