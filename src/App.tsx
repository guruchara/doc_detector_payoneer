import { useEffect, useState } from "react";

import "./App.css";
import { Box, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { DocumentDetector } from "./components";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);

        // ✅ Show snackbar after loading completes
        enqueueSnackbar("Payoneer Gateway is ready", {
          variant: "success",
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      }, 2000);

      return () => clearTimeout(timer); // clean up
    }
  }, [loading, enqueueSnackbar]);

  if (loading) {
    return (
      <CircularProgress
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  return (
    <Box>
      <Header />
      <Box mt={12}>
      <DocumentDetector />
      </Box>
    </Box>
  );
}

export default App;
