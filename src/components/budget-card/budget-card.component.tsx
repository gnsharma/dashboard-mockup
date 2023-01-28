import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
  styled,
  LinearProgress,
} from "@mui/material";
import {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";

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

export default BudgetCard;
