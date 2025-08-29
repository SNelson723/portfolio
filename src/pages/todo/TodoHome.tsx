import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTodos } from "../../api/todos";
import { useToast } from "../../components/toast/hooks/useToast";
import { setTodos } from "../../features/todoSlice";
import TodoCard from "./TodoCard";
import TodoList from "./TodoList";

const TodoHome = () => {
  const dispatch = useAppDispatch();
  const context = useAppSelector((state) => state.app);
  const todo = useAppSelector((state) => state.todo);
  const toast = useToast();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getTodos(context.devUrl, context.token, context.user.id)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setTodos(j.todos));
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleAdd = () => {};

  const sampleTodo = {
    id: 1,
    todo: "Test this out",
    complete: false,
    user_id: 1,
    category: "dev",
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
      <div className="select-none">Progress</div>
      <div className="flex gap-2 w-1/2">
        <input className="input" />
        <button className="btn-themeBlue">Add</button>
      </div>
      <TodoList />
    </div>
  );
};

export default TodoHome;
