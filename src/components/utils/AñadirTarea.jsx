import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import BotonFecha from "./BotonFecha";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Tasks from "./../../context/Tasks.js";

const AñadirTarea = () => {
  const { añadirTarea } = Tasks();

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = ({ title, desc, fecha }) => {
    añadirTarea(format(fecha, "dd/MM/yyyy"), title, desc);
    reset();
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="cursor-pointer">Añadir Tarea</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="my-5">Añadir Tarea</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Título</Label>
                <Input type="text" {...register("title")} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea {...register("desc")} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="fecha">Fecha</Label>
                <Controller
                  name="fecha"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <BotonFecha date={value} funcionDate={onChange} />
                  )}
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button type="button" variant="neutral">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Añadir</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AñadirTarea;
