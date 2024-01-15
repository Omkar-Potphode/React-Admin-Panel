import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from '../theme'
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../components/Header";

export const Faq = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Laborum sint ea laborum irure nisi velit incididunt cillum commodo anim adipisicing. Nisi mollit deserunt ad excepteur aute Lorem. Eiusmod proident do dolore sunt non pariatur officia minim. In ipsum voluptate reprehenderit occaecat. Est nostrud deserunt ad cupidatat esse anim minim fugiat tempor excepteur do consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Laborum sint ea laborum irure nisi velit incididunt cillum commodo anim adipisicing. Nisi mollit deserunt ad excepteur aute Lorem. Eiusmod proident do dolore sunt non pariatur officia minim. In ipsum voluptate reprehenderit occaecat. Est nostrud deserunt ad cupidatat esse anim minim fugiat tempor excepteur do consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Laborum sint ea laborum irure nisi velit incididunt cillum commodo anim adipisicing. Nisi mollit deserunt ad excepteur aute Lorem. Eiusmod proident do dolore sunt non pariatur officia minim. In ipsum voluptate reprehenderit occaecat. Est nostrud deserunt ad cupidatat esse anim minim fugiat tempor excepteur do consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Laborum sint ea laborum irure nisi velit incididunt cillum commodo anim adipisicing. Nisi mollit deserunt ad excepteur aute Lorem. Eiusmod proident do dolore sunt non pariatur officia minim. In ipsum voluptate reprehenderit occaecat. Est nostrud deserunt ad cupidatat esse anim minim fugiat tempor excepteur do consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Thw Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Laborum sint ea laborum irure nisi velit incididunt cillum commodo anim adipisicing. Nisi mollit deserunt ad excepteur aute Lorem. Eiusmod proident do dolore sunt non pariatur officia minim. In ipsum voluptate reprehenderit occaecat. Est nostrud deserunt ad cupidatat esse anim minim fugiat tempor excepteur do consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </>
  )
}
