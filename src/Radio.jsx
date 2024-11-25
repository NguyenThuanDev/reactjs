import clsx from "clsx";
import { useState } from "react";

const courses = [
    {
        id: 1,
        name: "HTML and CSS Pro"
    },
    {
        id: 2,
        name: "JavaScript Basic"
    },
    {
        id: 3,
        name: "JavaScript Nâng cao"
    },
    {
        id: 4,
        name: "ReactJS/NextJS"
    },
    {
        id: 5,
        name: "ExpressJS Nâng cao"
    }

]

const Radio = () => {
    const [checked, setChecked] = useState();
    const [choose, setChoose] = useState();

    const handleSubmit = () => {
        const data = courses.filter(item => {
            return item.id == checked;
        })
        console.log(data)
        setChoose(JSON.stringify(data))


    }
    return (
        <>
            {courses.map(course => {
                return (<>
                    <div key={course.id}>
                        <input type="radio" value={course.id} checked={checked == course.id} onChange={(e) => {
                            setChecked(e.target.value)
                        }}></input>
                        {course.name}
                    </div>
                </>)
            })}
            <button onClick={handleSubmit}>Submit</button>
            <p>{choose || ""}</p>

        </>

    );


}
export default Radio;