import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4">Carregando...</Typography>
      <LinearProgress />
    </Box>
  );
};

export default Loading;
