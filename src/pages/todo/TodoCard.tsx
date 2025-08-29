import type { Todo } from "../../types";
import { EditIcon, TrashIcon } from "../../nav/icons";
import IconBtn from "../../components/buttons/IconBtn";

interface TodoCardProps {
  task: Todo;
}

/**
 * TODO:
 * 
 * 1) Set up api calls to update and delete todo tasks 
 *  a) update => task, complete
 *  b) delete => todo
 * 
 * 2) Set up api call to add a todo
 * 
 * 3) Set up a Categories filter to sort by???
 */

const TodoCard = ({ task }: TodoCardProps) => {
  const { id, todo, complete, user_id } = task;
  const handleUpdate = (id: number, user_id: number) => {
    console.log("Update", id, user_id);
  };

  const handleDelete = (id: number, user_id: number) => {
    console.log("Delete", id, user_id);
  };
  return (
    <div className="flex justify-between items-center p-2.5 rounded-lg hover:bg-sky-200/45 bg-custom-white shadow-[1px_2px_5px_1px_lightgray] cursor-default">
      <p className={`${complete ? "" : "text-content"}`}>{todo}</p>
      <div className="flex gap-1">
        <IconBtn
          Icon={EditIcon}
          onClick={() => handleUpdate(id, user_id)}
          colorClass="themeBlue"
          hoverTheme="themeLiteBlue"
        />
        <IconBtn
          Icon={TrashIcon}
          onClick={() => handleDelete(id, user_id)}
          colorClass="themeOrange"
          hoverTheme="themeLiteOrange"
        />
      </div>
    </div>
  );
};

export default TodoCard;
