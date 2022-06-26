import { ThemeProvider } from "@mui/material/styles";
import StylesGlobal from "./config/styles/GlobalStyles";
import lightTheme, { darkTheme } from "./config/styles/themes/default";

import Routers from "./Routers";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StylesGlobal />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
