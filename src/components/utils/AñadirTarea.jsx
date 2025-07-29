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

const AñadirTarea = ({ AñadirTarea }) => {
  const [open, setOpen] = useState(false);
  const [fechaUsuario, setFechaUsuario] = useState(null);
  const [tituloUsuario, setTituloUsuario] = useState("");
  const [descripcionUsuario, setDescripcionUsuario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fechaUsuario || !tituloUsuario || !descripcionUsuario) return;

    AñadirTarea(fechaUsuario, tituloUsuario, descripcionUsuario);
    console.log("Formulario enviado");

    setOpen(false);
  };

  const handleTitulo = (titulo) => {
    setTituloUsuario(titulo);
  };

  const handleDescripcion = (descripcion) => {
    setDescripcionUsuario(descripcion);
  };

  const handleFecha = (selectedDate) => {
    setFechaUsuario(format(selectedDate, "dd/MM/yyyy"));
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="cursor-pointer">Añadir Tarea</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="my-5">Añadir Tarea</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  name="title"
                  value={tituloUsuario}
                  onChange={(e) => handleTitulo(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea
                  id="descripcion"
                  name="descripcion"
                  value={descripcionUsuario}
                  onChange={(e) => handleDescripcion(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="fecha">Fecha</Label>
                <BotonFecha funcionDate={handleFecha} date={fechaUsuario} />
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
