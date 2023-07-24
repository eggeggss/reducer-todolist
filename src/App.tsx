import React, { useContext, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';
import Form from './form';
import { TodoContext,TodoProvider,useTodo } from './context/todocontext';
import { todoInittype, ItemType, todoReducerInittype } from "./model/type";


function App() {
  //const oldtodos = useRef<ItemType[]>([{id:0,content:"1",complete:false}]);
  const oldtodos = useRef<ItemType[]>([]);
  const [todos, setTodos] = useState<ItemType[]>(oldtodos.current);
  
  let todoInit: todoReducerInittype = {
    todos: todos,
    settodos: setTodos
  }

  return (
    <TodoProvider data={todoInit}>
      <div className="App" >
         <Form />
         <Todo />
      </div>
    </TodoProvider>
  );
}

export default App;
