import { createContex, createContext, useContext } from "react";

export const ToDoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo message",
            completed:false
        },
        {
            id:2,
            todo:"Todo message",
            completed:false
        }
        
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    todoComplete:(id)=>{}
})

export const useToDo=()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider= ToDoContext.Provider