import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useContext } from "react";
import { ColorModeContext } from "../pages/_app";

type OnModeChange = (mode: "light" | "dark") => void;

export default function DarkModeButton() {
  const colorModeContext = useContext(ColorModeContext);
  const theme = useTheme();
  const newMode = theme.palette.mode == "dark" ? "light" : "dark";
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => colorModeContext.toggleColorMode(newMode)}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}
