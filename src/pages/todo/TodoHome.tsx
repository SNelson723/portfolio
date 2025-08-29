import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTodos } from "../../api/todos";
import { useToast } from "../../components/toast/hooks/useToast";
import { setTodos } from "../../features/todoSlice";

const TodoHome = () => {
  const dispatch = useAppDispatch();
  const context = useAppSelector((state) => state.app);
  const todo = useAppSelector((state) => state.todo);
  const toast = useToast();

  useEffect(() => {
    getTodos(context.devUrl, context.token, context.user.id).then((resp) => {
      const j = resp.data;
      if (j.error === 0) {
        console.log(j);
      }
    });
  }, []);

  return (
    <div>
      <h1>TodoHome Page</h1>
    </div>
  );
};

export default TodoHome;
