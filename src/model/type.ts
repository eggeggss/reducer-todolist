
export interface ItemType {
    id?: number,
    content?: string,
    complete: boolean,
    editMode:boolean,
}

export interface todoInittype {
     todos: ItemType[],
     settodos: (state: ItemType[]) => void,
     addTodo: (state:string) => void,
     delTodo: (id: number) => void,
     completeTodo: (id: number) => void,
     editeMode:(id:number)=>void,
     updateTodo:(state:ItemType)=>void,
}

export interface todoReducerInittype{
    todos: ItemType[],
    settodos: (state: ItemType[]) => void,
}