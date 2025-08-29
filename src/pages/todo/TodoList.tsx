import TodoCard from "./TodoCard";
import { useAppSelector } from "../../hooks";

const TodoList = () => {
  const todo = useAppSelector((state) => state.todo);
  return (
    <div className="grid gap-4 w-1/2 rounded-xl p-4 bg-custom-white shadow-lg">
      {todo.todos.map((todo) => (
        <TodoCard key={todo.id} task={todo} />
      ))}
    </div>
  );
};

export default TodoList;
