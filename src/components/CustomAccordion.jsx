import { KeyboardArrowDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function CustomAccordion({ summary, details }) {
  return (
    <Accordion sx={{ backgroundColor: "#121212" }}>
      <AccordionSummary
        sx={{
          backgroundColor: "#121212",
          border: "1px solid white",
          paddingY: "4px",
          borderRadius: "1rem",
        }}
        expandIcon={
          <KeyboardArrowDown fontSize="large" sx={{ color: "#34C94B" }} />
        }
      >
        <span className="text-xl font-semibold text-white">{summary}</span>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "white",
          borderRadius: "1rem",
          paddingY: "1rem",
        }}
      >
        <span className="text-xl font-semibold">{details}</span>
      </AccordionDetails>
    </Accordion>
  );
}
