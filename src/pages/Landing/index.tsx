import CardContainer from "../../components/CardContainer";
import CardLeftFooter from "../../components/ResponsiveAppBar";
import ImageTextContainer from "../../components/ImageTextContainer";
import Strip from "../../components/Strip";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import CopyRight from "../../components/CopyRight";

export default function Landing() {
  const textHeader = "Minha primeira página com React";
  const textContact = "Contato";
  return (
    <>
      <Strip
        text={textHeader}
        textColor="#FFF"
        boxHeight={200}
        fontWeight="bold"
      />
      <CardContainer></CardContainer>
      <ImageTextContainer></ImageTextContainer>
      <Strip
        text={textContact}
        textColor="#FFF"
        boxHeight={200}
        fontWeight="bold"
      />
      <ResponsiveAppBar></ResponsiveAppBar>
      <CopyRight></CopyRight>
    </>
  );
}
