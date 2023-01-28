import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Badge,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material/";

const AppBar = () => {
  return (
    <MuiAppBar
      position="sticky"
      sx={{
        backgroundColor: "#32384b",
        px: "50px",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "200px",
        }}
      >
        <Box sx={{ display: "flex", gap: "8px", fontWeight: "bold" }}>
          <Typography variant="h6" sx={{ color: "green", fontWeight: "900" }}>
            H
          </Typography>
          <Typography variant="h6" sx={{ letterSpacing: "8px" }}>
            OURS
          </Typography>
        </Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            flexGrow: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              textDecoration: "solid underline green 2px",
              textUnderlineOffset: "4px",
            }}
          >
            Dashboard
          </Typography>
          <Typography variant="subtitle1">Projects</Typography>
          <Typography variant="subtitle1">Team</Typography>
          <Typography variant="subtitle1">Clients</Typography>
          <Typography variant="subtitle1">Time</Typography>
          <Typography variant="subtitle1">Reports</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge variant="dot" color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <Avatar>H</Avatar>
            <Typography variant="subtitle1">Mario</Typography>
            <ExpandMoreIcon />
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
