import {
  Box,
  AppBar,
  Toolbar,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import {
  GridView as GridViewIcon,
  TaskAlt as TaskAltIcon,
  Autorenew as AutorenewIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  WarningAmberRounded as WarningAmberRoundedIcon,
} from "@mui/icons-material/";

function BudgetCard({ header, subHeader, profitability }: any) {
  return (
    <Paper elevation={4}>
      <Card sx={{ height: "100%" }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6">{header}</Typography>
              <Typography variant="body2">{subHeader}</Typography>
            </Box>
            <Avatar>H</Avatar>
          </Box>

          <Box sx={{ display: "flex", gap: "12px" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", opacity: "0.5" }}
            >
              <Typography variant="body2">Total Budget</Typography>
              <Typography variant="body2">Profitability(100%)</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2">70,000€</Typography>
              <Typography variant="body2">{profitability}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}

function InfoCard({ icon, value, text, variant }: any) {
  return (
    <Paper elevation={4} sx={{ width: "200px" }}>
      <Card
        sx={{
          height: "inherit",
          ...(variant === "error" ? { backgroundColor: "pink" } : {}),
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "start", pb: 0 }}>
          {icon}
          <Box
            sx={{
              ml: "-30px",
              flexGrow: 1,
              pt: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...(variant === "error" ? { color: "white" } : {}),
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              {value}
            </Typography>
            <Typography variant="subtitle1">{text}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}

function App() {
  return (
    <>
      <Box
        sx={{
          height: "calc(100% - 30px)",
          mx: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <AppBar
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
            <Box>HOURS</Box>
            <Box
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                flexGrow: 1,
              }}
            >
              <Typography variant="subtitle1">Dashboard</Typography>
              <Typography variant="subtitle1">Projects</Typography>
              <Typography variant="subtitle1">Team</Typography>
              <Typography variant="subtitle1">Clients</Typography>
              <Typography variant="subtitle1">Time</Typography>
              <Typography variant="subtitle1">Reports</Typography>
            </Box>
            <Box>
              <Avatar>H</Avatar>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            height: "calc(100% - 64px)",
            px: "50px",
            pt: "30px",
            pb: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              flexGrow: 3,
              display: "grid",
              gridTemplateColumns: "3fr 2fr 1fr",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <InfoCard
                  icon={<GridViewIcon color="success" />}
                  value="5"
                  text="Total Projects"
                />
                <InfoCard
                  icon={<TaskAltIcon color="success" />}
                  value="1"
                  text="Completed"
                />
                <InfoCard
                  icon={<AutorenewIcon color="success" />}
                  value="3"
                  text="Ongoing"
                />
              </Box>
              <Paper elevation={4} sx={{ flexGrow: 1 }}></Paper>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <InfoCard
                  icon={<WarningAmberRoundedIcon color="error" />}
                  value="1"
                  text="Delayed"
                  variant="error"
                />
                <InfoCard
                  icon={<PeopleAltOutlinedIcon color="success" />}
                  value="5"
                  text="Employees"
                />
              </Box>
              <Paper elevation={4} sx={{ flexGrow: 1 }}></Paper>
            </Box>
            <Paper elevation={1}></Paper>
          </Box>
          <Box sx={{ height: "30px" }}>Budget Status</Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            <BudgetCard
              header="Insurance App"
              subHeader="Verti"
              profitability="-2,500€"
            />
            <BudgetCard
              header="Neo"
              subHeader="Bankia"
              profitability="4,000€"
            />
            <BudgetCard
              header="VR Website"
              subHeader="Barça"
              profitability="4,000€"
            />
            <BudgetCard
              header="VR Website"
              subHeader="Barça"
              profitability="4,000€"
            />
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ pt: "10px", textAlign: "center" }}>
        Hi-fi for the project manager's dashboard after
      </Typography>
    </>
  );
}

export default App;
