import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Header } from "../components/Header";
import { GeographyChart } from "../components/GeographyChart";

export const Geography = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
    <Box>

      <Header title="Geography" subtitle="Simple Geography Chart"/>

      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart/>
      </Box>

    </Box>
    </>
  )
}
