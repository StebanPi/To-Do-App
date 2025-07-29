import AñadirTarea from "../utils/AñadirTarea";
import { Moon, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useDark from "./../hooks/useDark";
const TasksNavbar = ({ funcionAñadir }) => {
  const { isDark, toggleDarkMode } = useDark();

  return (
    <>
      <Card className="w-full mb-10 bg-white dark:bg-[#1f1f1f]">
        <CardContent className="grid justify-center gap-3 items-center grid-rows-2">
          <div className="flex gap-5 justify-center">
            <Button size="icon" variant="noShadow" className="hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                <path d="M3 10h18" />
                <path d="m16 20 2 2 4-4" />
              </svg>
            </Button>
            <h1 className="text-2xl self-center">Task Manager</h1>
          </div>

          <div className="flex gap-4">
            <AñadirTarea AñadirTarea={funcionAñadir}></AñadirTarea>
            <Button variant="neutral" onClick={() => toggleDarkMode()}>
              {!isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default TasksNavbar;
