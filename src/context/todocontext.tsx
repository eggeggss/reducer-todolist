import React, { createContext, useContext, useReducer } from 'react';
import { ItemType, todoInittype, todoReducerInittype } from "../model/type";
import { todoActionType, todoReducer } from '../reducer/todoReducer';

export const todoInit:todoInittype={
    todos: [],
    settodos:()=>{},
    addTodo: () => {},
    delTodo:()=>{},
    completeTodo:()=>{},
    editeMode:()=>{},
    updateTodo:()=>{},
}

export const TodoContext = createContext(todoInit);

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const newItem = (content: string) => {
    let item: ItemType = {
        id: Math.floor(Math.random() * 100000),
        content,
        complete: false,
        editMode: false,
    }
    return item;
}

export const TodoProvider = ({ children, ...prop  }: any)=>{

    const [state, dispatch] = React.useReducer(todoReducer, prop.data);

    const addTodo=(content:string)=>{
        dispatch({
            type: todoActionType.increment,
            payload: newItem(content),
        });
    }

    const delTodo=(id:number)=>{
        dispatch({
            type: todoActionType.decremenet,
            payload: id,
        });
    }

    const completeTodo=(id:number)=>{
        dispatch({
            type: todoActionType.complete,
            payload: id,
        });
    }
    
    const editeMode= (id:number) => {
        dispatch({
            type: todoActionType.edit,
            payload: id
        });
    }

    const updateTodo=(update:ItemType)=>{
        dispatch({
            type: todoActionType.update,
            payload: update
        });
    }

    const value:todoInittype = {
        todos: prop.data.todos,
        settodos:prop.data.settodos,
        addTodo,
        delTodo,
        completeTodo,
        updateTodo,
        editeMode,
    };

    return (
    <>
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    </>)

}
