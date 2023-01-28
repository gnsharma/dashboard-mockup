import { Box, Paper, Card, CardContent, Typography } from "@mui/material";

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

export default InfoCard;
