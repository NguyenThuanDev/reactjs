import React from "react";
const Demo = (props) => {
    const array = ['Paypal', 'COD'];
    const sellection = <select>{array.map(e => {
        return <option value={e} key={e}>{e}</option>
    })}</select>
    return sellection
}
export default Demo;