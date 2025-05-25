import { useEffect, useState } from "react";

import "./App.css";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";

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
    <Card>
      <CardContent>
        <Typography
          color="text.secondary"
          variant="h1"
          align="center"
          sx={{ mt: 4 }}
          fontWeight="fontWeightSemiBold"
        >
          Custom Payoneer Payment Gateway
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setLoading(true)}
          sx={{ mt: 4 }}
        >
          Gateway Restart
        </Button>
      </CardContent>
    </Card>
  );
}

export default App;
