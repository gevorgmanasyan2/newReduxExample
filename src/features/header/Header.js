import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveNewTodo} from '../todos/todosSlice';



const Header=()=>{
    const[text,setText]=useState("");
    const dispatch=useDispatch();
    const data=useSelector(state=>state.todos)

    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleKeyDown=e=>{
        const trimmedText=text.trim();
        // if(e.key==="Enter" && trimmedText){
        //   dispatch({type:'todos/todoAdded',payload:trimmedText});
        //   setText('');
    // }
        //if the user passes the enter key
        if(e.which===13 && trimmedText){
            //Create the thunk function with the text the user wrote
            const saveNewTodoThunk=saveNewTodo(trimmedText)
            //Then dispatch the thunk function itself
            dispatch(saveNewTodoThunk)
            setText('')
        }
        
    }
    return(
        <header className="header">
            <input
            type="text"
            autoFocus="true"
            className="new-todo"
            placeholder="What needt to be done?"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />           
            
        </header>
    )
}

export default Header;