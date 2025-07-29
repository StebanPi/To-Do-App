import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import DialogTodo from "./MarcarCompletado";
import EliminarTarea from "./EliminarTarea";

const CardTodo = ({
  title,
  description,
  date,
  completed,
  id,
  eliminarTarea,
}) => {
  return (
    <Card className="w-full bg-white dark:bg-[#1f1f1f]">
      <CardHeader>
        <CardTitle
          className={`text-xl ${
            completed && "text-gray-400 line-through italic"
          }`}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col justify-between gap-5 lg:flex-row lg:gap-0">
        <span className="text-xs text-gray-500">{date}</span>
        <div className="flex flex-col lg:flex-row gap-3">
          <DialogTodo id={id} estado={completed}></DialogTodo>
          <EliminarTarea id={id} eliminarTarea={eliminarTarea}></EliminarTarea>
        </div>
      </CardFooter>
    </Card>
  );
};
export default CardTodo;
