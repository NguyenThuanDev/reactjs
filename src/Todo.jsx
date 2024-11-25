import { useState } from "react";

const Todo = () => {
    const [task, setTask] = useState([]);
    const [inputValue, setInputValue] = useState();
    const setAdd = () => {
        // setInputValue(inputValue)
        setTask([...task, inputValue])


    }
    console.log(task)

    return (
        <>
            <input type="text" onChange={(e) => {
                setInputValue(e.target.value)
            }} />
            <button onClick={setAdd}>Add</button>

        </>


    );


}

export default Todo;