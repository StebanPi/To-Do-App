import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Tasks from "./../../context/Tasks.js";

const EliminarTarea = ({ id }) => {
  const { eliminarTarea } = Tasks();

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-[#ff4d4f]">Eliminar</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#361717] text-white">
          <AlertDialogHeader className="text-white">
            <AlertDialogTitle>¿Estás completamente seguro?</AlertDialogTitle>
            <AlertDialogDescription className="text-white">
              Esto eliminará permanentemente la tarea, esta acción no se puede
              deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-[#1f1f1f] text-white">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-[#ff6669] text-black"
              onClick={() => eliminarTarea(id)}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
export default EliminarTarea;
