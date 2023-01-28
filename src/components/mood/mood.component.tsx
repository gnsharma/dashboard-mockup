import { Box, Typography, Avatar, Divider } from "@mui/material";

import Slider from "../slider/slider.component";

function Mood({ value, icon = "H", name, title }: any) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", py: "6px", gap: "12px" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Avatar>{icon}</Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="body2" sx={{ opacity: "0.8" }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Slider defaultValue={value} />
      <Divider light />
    </Box>
  );
}

export default Mood;
