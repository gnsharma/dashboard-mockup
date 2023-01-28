import {
  Box,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  GridView as GridViewIcon,
  TaskAlt as TaskAltIcon,
  Autorenew as AutorenewIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  WarningAmberRounded as WarningAmberRoundedIcon,
} from "@mui/icons-material/";

import { DonutChart, BudgetCard, InfoCard, Mood, AppBar } from "src/components";

function App() {
  return (
    <>
      <Box
        sx={{
          mx: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <AppBar />
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
              flexGrow: 1,
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
                  icon={
                    <GridViewIcon color="success" sx={{ fontSize: "36px" }} />
                  }
                  value="5"
                  text="Total Projects"
                />
                <InfoCard
                  icon={
                    <TaskAltIcon color="success" sx={{ fontSize: "36px" }} />
                  }
                  value="1"
                  text="Completed"
                />
                <InfoCard
                  icon={
                    <AutorenewIcon color="success" sx={{ fontSize: "36px" }} />
                  }
                  value="3"
                  text="Ongoing"
                />
              </Box>
              <Paper elevation={4} sx={{ flexGrow: 2 }}></Paper>
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
                  icon={
                    <WarningAmberRoundedIcon
                      color="error"
                      sx={{ fontSize: "36px" }}
                    />
                  }
                  value="1"
                  text="Delayed"
                  variant="error"
                />
                <InfoCard
                  icon={
                    <PeopleAltOutlinedIcon
                      color="success"
                      sx={{ fontSize: "36px" }}
                    />
                  }
                  value="5"
                  text="Employees"
                />
              </Box>
              <Paper
                elevation={4}
                sx={{
                  flexGrow: 2,
                  p: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="button" sx={{ textTransform: "none" }}>
                    Budget
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Profitability
                    </Typography>
                    <FormControlLabel
                      control={<Switch defaultChecked color="default" />}
                      label="Status"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 2,
                  }}
                >
                  <DonutChart
                    height={200}
                    width={200}
                    // formatValues={() => "5 Total projects"}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Box
                      sx={{ border: "6px solid #c80c1a", borderRadius: "50%" }}
                    />
                    Over Budget
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Box
                      sx={{ border: "6px solid #52d9c9", borderRadius: "50%" }}
                    />
                    On Budget
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Box
                      sx={{ border: "6px solid #818cd1", borderRadius: "50%" }}
                    />
                    Under Budget
                  </Typography>
                </Box>
              </Paper>
            </Box>
            <Paper elevation={4} sx={{ px: "12px", pt: "20px", pb: "10px" }}>
              <Typography variant="button" sx={{ textTransform: "none" }}>
                Team mood
              </Typography>
              <Mood value={20} name="Andrea" title="UX Junior" />
              <Mood value={80} name="Alvaro" title="Back end developer" />
              <Mood value={60} name="Juan" title="UX Senior" />
              <Mood value={0} name="Jose" title="Marketing" />
              <Mood value={50} name="Maria" title="UX Junior" />
            </Paper>
          </Box>
          <Box sx={{ height: "30px" }}>Budget Status</Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            <BudgetCard
              header="Insurance App"
              subHeader="Verti"
              profitability={
                <Typography sx={{ color: "#ff0000" }} variant="body2">
                  -2,500€
                </Typography>
              }
              percent={100}
              color="#ff0000"
              hours={
                <Typography variant="body2" sx={{ color: "#ff0000" }}>
                  100 hours over Budget!
                </Typography>
              }
              icon={
                <WarningAmberRoundedIcon
                  color="error"
                  sx={{ fontSize: "20px" }}
                />
              }
            />
            <BudgetCard
              header="Neo"
              subHeader="Bankia"
              profitability="4,000€"
              percent={60}
              color="#ffff00"
              hours="1000 sold hours"
            />
            <BudgetCard
              header="VR Website"
              subHeader="Barça"
              profitability="4,000€"
              percent={60}
              hours="2000 sold hours"
            />
            <BudgetCard
              header="VR Website"
              subHeader="Barça"
              profitability="4,000€"
              percent={100}
              hours="1100 sold hours"
              icon={<TaskAltIcon color="success" sx={{ fontSize: "20px" }} />}
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
