import React from 'react';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import "./styles.css"

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return <div className='todos'>
    <ul className='no-bullets'>
    {todos.map((todo) => (
      <li><SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/></li>
    ))}
    </ul>
  </div>;
};

export default TodoList;
