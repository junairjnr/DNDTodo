import React from "react";
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    // <div className="todos">
    //   {todos?.map((todo) => (
    //     <SingleTodo
    //       todos={todos}
    //       todo={todo}
    //       key={todo.id}
    //       setTodos={setTodos}
    //     />
    //   ))}
    // </div>
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Task</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Task</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
