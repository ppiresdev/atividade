import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import waterImg from "./img/water.jpg";

type StripProps = {
  text?: string;
  textColor?: string;
  boxHeight?: number;
  fontWeight?: string;
};

export default function Strip(props: StripProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: props.boxHeight,
        backgroundImage: `url(${waterImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ color: props.textColor, fontWeight: props.fontWeight }}
      >
        {props.text}
      </Typography>
    </Box>
  );
}
