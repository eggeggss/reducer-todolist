import React, { useState } from 'react';
import { ItemType } from './model/type';
import { useTodo } from './context/todocontext';


const Todo :React.FC= () => {
    const { todos, delTodo, completeTodo,editeMode,updateTodo }= useTodo();
    const [update,setUpdate]=useState("");
    return (
        <>
            <div className='mt-2 container'>
            <div className='justify-content-between'>
                <div className="col-12"> 
                        <ul style={{ border: "5px solid black", minHeight: "800px", listStyle:"none"}} className='m-0 p-0'>
                            {
                               (todos.length === 0) ? (<>
                                <li style={{ fontSize: "36px" }} >NO DATA FOUND...</li>
                                </>): (<></>)
                            }
                            {
                               todos?.map((item,index)=>{
                                    return(
                                        <li key={item.id} className='text-start m-1' 
                                            style={{border:"5px solid black",lineHeight:"60px"}}>

                                            <input type="checkbox" className='ms-2' 
                                            style={{width:"30px",height:"30px",lineHeight:"30px"}} 
                                            defaultChecked={item.complete}
                                            onClick={()=>{
                                                 completeTodo(item.id as number);
                                            }}
                                            />
                                            
                                            <span className="float-end">
                                            <button style={{ fontSize: "36px", border: "3px solid black" }} 
                                            className='btn btn-danger mx-2 my-0 py-0'
                                            onClick={()=>{
                                                delTodo(item.id as number);
                                            }}
                                            >Del</button>
                                            </span>
                                            
                                            <span className="float-end">
                                                 <button style={{fontSize:"36px",border:"3px solid black"}} 
                                                 className='btn btn-info mx-2 my-0 py-0'
                                                 onClick={()=>{                                              
                                                     editeMode(item.id as number);
                                                 }}>
                                                    {
                                                        (item.editMode) ? "Update":"Edit"

                                                    } 
                                                </button>
                                            </span>
                                            
                                            {
                                                (item.editMode)? (<>
                                                    <input style={{ fontSize: "36px",height:"50px",border:"5px solid purple",backgroundColor:"yellow" }}
                                                        className={(item.complete) ? "me-5 ms-2 complete mt-3" : "me-5 ms-2 mt-3"}
                                                        onChange={(e)=>{
                                                            item.content=e.target.value;
                                                            updateTodo(item);
                                                        }}                                                     
                                                        value={item.content} />
                                                </>
                                                ):(<>
                                                    <span style={{ fontSize: "36px" }}
                                                        className={(item.complete) ? "me-5 ms-2 complete" : "me-5 ms-2"}>
                                                        {item.content}
                                                    </span>
                                                </>)

                                            }
                                           
                                            
                                            {(item.complete) ? (<span
                                            style={{fontSize:"36px"}}
                                            className='float-end me-2 text-success'>Complete</span>) 
                                            : (<span
                                            style={{ fontSize: "36px" }}
                                            className='float-end me-2 text-danger'>NotYet</span>)}

                                        </li>    
                                    )
                                })
                            }
                        </ul>
                    </div>
            </div>
            </div>
        </>
    );
};

export default Todo;