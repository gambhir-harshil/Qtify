import { KeyboardArrowDown } from "@mui/icons-material";
import CustomAccordion from "./CustomAccordion";

export default function Faqs() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-center text-white">FAQs</h1>
      <CustomAccordion
        summary={"Is QTify free to use?"}
        details={"Yes! it is 100% free, and has 0% ads!"}
      />
      <CustomAccordion
        summary={"Can I download and listen to songs offline?"}
        details={
          "Sorry, unfortunately we don't provide the service to download any songs."
        }
      />
    </div>
  );
}
