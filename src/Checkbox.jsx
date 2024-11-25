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
const CheckBox = () => {
    const [checked, setChecked] = useState([]);


    console.log(checked)
    return (
        <>
            {courses.map(course => {
                return (<div key={course.id}>
                    <input type="checkbox" value={course.id} onChange={() => {
                        //checked chứa các array chứa khóa học
                        const data = checked.filter(item => {
                            return item.id == course.id;
                        })

                        if (data.length != 0) {
                            setChecked(checked.filter(item => {
                                return item.id != course.id;
                            }))

                        }
                        else {
                            setChecked([...checked, { id: course.id, name: course.name }])
                        }

                    }} />
                    {course.name}

                </div>)
            })}

            <p>{checked.length == 0 ? "" : JSON.stringify(checked)}</p>
        </>

    );
}
export default CheckBox;