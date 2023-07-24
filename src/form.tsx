import React, { useEffect, useRef, useState } from 'react';
import { useTodo } from './context/todocontext';

const Form:React.FC = () => {
    const { addTodo }=useTodo();
    const [content,setContent]=useState("");
    const ref = useRef<any>(null);

    const onChangeSetContent=(e:any)=>{
        setContent(e.target.value);
    }

    const handleKeyDown =(e:any)=>{          
        if (e.key === 'Enter'){
            if (content.trim() === "")
                return;              
            addTodo(content);
            setContent((prev) => {
                ref.current.focus();
                return "";
            });
        } 
    }

    return (
        <div className='container-fluid mt-4' >
            <div className='row justify-content-between'>
                <div className='col-12' >
                    <input 
                       type='text' autoFocus
                       ref={ref} 
                       placeholder='輸入工作項目'
                       value={content}
                       onKeyDown={handleKeyDown}
                       onChange={onChangeSetContent}
                       style={{width:"50%",height:"60px",border:"5px solid black"}} />
                   
                </div>
            </div>
        </div>
    );
};

export default Form;