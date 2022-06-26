import Box from "@mui/material/Box";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReorderIcon from "@mui/icons-material/Reorder";
import CheckIcon from "@mui/icons-material/Check";

export default function CardContainer() {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Grid item xs={4}>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            p: 3,
          }}
        >
          <ScreenshotMonitorIcon sx={{ fontSize: "100px" }} />
          <Typography
            component="div"
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            Somente para desktop
          </Typography>
          <Typography
            component="div"
            sx={{ color: "#000", fontWeight: "bold", textAlign: "center" }}
          >
            Vamos aprender a como utilizar um framework
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            p: 3,
          }}
        >
          <ReorderIcon sx={{ fontSize: "100px" }} />
          <Typography
            component="div"
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            Criando com componentes
          </Typography>
          <Typography
            component="div"
            sx={{ color: "#000", fontWeight: "bold", textAlign: "center" }}
          >
            Utilizamos o Material UI
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            p: 3,
          }}
        >
          <CheckIcon sx={{ fontSize: "100px" }} />
          <Typography
            component="div"
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            Fácil aproveitamento
          </Typography>
          <Typography
            component="div"
            sx={{ color: "#000", fontWeight: "bold", textAlign: "center" }}
          >
            Estamos no caminho
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
