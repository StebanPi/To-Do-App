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

const DialogTodo = ({ id, estado }) => {
  const { actualizarTarea } = Tasks();

  const disabled = estado;

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild disabled={disabled}>
          <Button
            disabled={disabled}
            className={`${estado ? "line-through italic" : ""}`}
          >
            Marcar como completado
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esto marcara como completado la tarea, esta acción no se puede
              deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                actualizarTarea(id);
                console.log(estado);
              }}
            >
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
// ...existi
export default DialogTodo;
