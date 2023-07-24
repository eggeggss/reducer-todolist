import React, { useReducer } from 'react';
import {ItemType, todoInittype,todoReducerInittype} from "../model/type"; 

export enum todoActionType {
    increment = "increment",
    decremenet = "decremenet",
    edit="edit",
    complete ="complete",
    update="update",
}

type todoAction =
    | { type: "increment"; payload: ItemType }
    | { type: "decremenet"; payload: number }
    | { type: "edit"; payload: number }
    | { type: "complete"; payload: number }
    | { type: "update"; payload: ItemType }

export const todoReducer =  (state: todoReducerInittype, action: todoAction): todoReducerInittype =>{

    switch (action.type) {

        //新增
        case todoActionType.increment:       
            let data= action.payload;
            let newtodos_add = [...state.todos, data];
            state.settodos(newtodos_add);

           return {
               todos: newtodos_add,
               settodos:state.settodos,
           };  
        
        //刪除
        case todoActionType.decremenet:

            let id = action.payload;
            let newitems_del:ItemType[]=[];

            [...state.todos].forEach((item)=>{
                    if(item.id!=id)
                        newitems_del.push(item);                  
            })

            state.settodos(newitems_del);
        
            return {
                todos: newitems_del,
                settodos: state.settodos,
            }; 

        //完成    
        case todoActionType.complete:

            let completeid = action.payload;
            let newitem_completes: ItemType[] = [];
            
            [...state.todos].map((item) => {
                if (item.id === completeid)
                    item.complete = !item.complete;             
                newitem_completes.push(item);
            })

            return {
                todos: newitem_completes,
                settodos: state.settodos,
            }; 

        //編輯模式    
        case todoActionType.edit:

            let editeid=action.payload;
            let newitem_edit: ItemType[] = [];

            [...state.todos].map((item) => {
                if (item.id === editeid){
                    item.editMode = !item.editMode;
                }
                newitem_edit.push(item);
            })

            return {
                todos: newitem_edit,
                settodos: state.settodos,
            };

        //更新    
        case todoActionType.update:

            let update_item=action.payload;         
            let newitem_updaet=[...state.todos].map((item) => {
                if (item.id === update_item.id as number) {
                    item.content = update_item.content;
                }
                return item;
            })

            return {
                todos: newitem_updaet,
                settodos: state.settodos,
            };

        default:
            throw new Error();
    }
}
