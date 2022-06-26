import { Box, Grid } from "@mui/material";
import CardImage from "../CardImage";
import CardText from "../CardText";
import redmiImage from "./img/Redmi.webp";
import sourceCodeImage from "./img/source-code.jpg";
import kidsImage from "./img/kids.webp";

export default function ImageTextContainer() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <CardText titulo="Lorem Ipsum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntur!
          </CardText>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage imageSrc={redmiImage} imageAlt="Redmi Note" />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage imageSrc={sourceCodeImage} imageAlt="Source Code" />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <CardText titulo="Lorem Ipsum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntur!
          </CardText>
        </Grid>
        <Grid item xs={6}>
          <CardText titulo="Lorem Ipsum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntur!
          </CardText>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage imageSrc={kidsImage} imageAlt="Kids" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
