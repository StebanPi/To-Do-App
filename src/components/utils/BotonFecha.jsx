import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const BotonFecha = ({ funcionDate, date }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="noShadow"
          className="w-[280px] justify-start text-left font-base"
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border-0! p-0">
        <Calendar mode="single" onSelect={funcionDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
};
export default BotonFecha;
