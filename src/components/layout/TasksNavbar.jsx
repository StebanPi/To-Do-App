import AñadirTarea from "../utils/AñadirTarea";
import { Moon, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useDark from "./../../hooks/useDark";
const TasksNavbar = () => {
  const { isDark, toggleDarkMode } = useDark();

  return (
    <>
      <Card className="w-full mb-10 bg-white dark:bg-[#1f1f1f]">
        <CardContent className="grid justify-center gap-3 items-center grid-rows-2 lg:justify-between lg:flex">
          <div className="flex gap-5 justify-center">
            <h1 className="text-2xl self-center">Task Manager</h1>
          </div>

          <div className="flex gap-4">
            <AñadirTarea></AñadirTarea>
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
