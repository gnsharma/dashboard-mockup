import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
  styled,
  LinearProgress,
  IconButton,
  Badge,
  Divider,
} from "@mui/material";
import {
  GridView as GridViewIcon,
  TaskAlt as TaskAltIcon,
  Autorenew as AutorenewIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  WarningAmberRounded as WarningAmberRoundedIcon,
  Notifications as NotificationsIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material/";
import {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import { alpha } from "@mui/material/styles";
import SliderUnstyled, {
  SliderUnstyledThumbSlotProps,
  SliderUnstyledProps,
} from "@mui/base/SliderUnstyled";

import "./app.css";

const getEmojifromValue = (value: number | undefined) => {
  if (!value) return "😡";
  if (value < 20) return "😡";
  if (value < 40) return "😟";
  if (value < 60) return "😐";
  if (value < 80) return "🙂";
  if (value >= 80) return "😄";
};

const EmojiThumb = React.forwardRef(function Thumb(
  props: SliderUnstyledThumbSlotProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  const {
    ownerState: { defaultValue },
    className = "",
    children,
    ...other
  } = props;
  const thumbValue = Array.isArray(defaultValue)
    ? defaultValue[0]
    : defaultValue;
  return (
    <span className={`${className} slider-thumb-wrapper`} {...other} ref={ref}>
      <span>{getEmojifromValue(thumbValue)}</span>
      {children}
    </span>
  );
});

const Slider = React.forwardRef(function Slider(
  props: SliderUnstyledProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <SliderUnstyled
      {...props}
      ref={ref}
      slots={{ thumb: EmojiThumb }}
      slotProps={{
        root: { className: "slider-root" },
        rail: { className: "slider-rail" },
        track: { className: "slider-track" },
      }}
    />
  );
});

interface StyledLinearProgressProps extends LinearProgressProps {
  barColor?: string;
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "barColor",
})<StyledLinearProgressProps>(({ barColor }) => ({
  height: 16,
  borderRadius: 8,
  // [`&.${linearProgressClasses.barColorPrimary}`]: {
  //   backgroundColor: alpha(barColor ?? "#00ff00", 1),
  // },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: barColor ?? "#00ff00",
  },
}));

function BudgetCard({
  header,
  subHeader,
  profitability,
  percent,
  hours,
  icon,
  color,
}: any) {
  return (
    <Paper elevation={4}>
      <Card sx={{ height: "200px" }}>
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              mt: icon ? "-30px" : 0,
            }}
          >
            {icon ? <Box sx={{ alignSelf: "flex-end" }}>{icon}</Box> : <Box />}
            <BorderLinearProgress
              variant="determinate"
              value={percent}
              barColor={color}
              color="primary"
            />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Actual hours: 1100</Typography>
              <Typography variant="body2">{hours}</Typography>
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
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {value}
            </Typography>
            <Typography variant="subtitle1">{text}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}

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

export default function App() {
  return (
    <>
      <Box
        sx={{
          // height: "calc(100% - 30px)",
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
            <Box sx={{ display: "flex", gap: "8px", fontWeight: "bold" }}>
              <Typography
                variant="h6"
                sx={{ color: "green", fontWeight: "900" }}
              >
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
              <Paper elevation={4} sx={{ flexGrow: 2 }}></Paper>
            </Box>
            <Paper elevation={4} sx={{ px: "12px", pt: "20px", pb: "10px" }}>
              <Typography variant="h6">Team mood</Typography>
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

// export default App;
