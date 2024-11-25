const Input = ({ type = "text", placeholder, name }) => {

    return (
        <input type={type} placeholder={placeholder} name={name} className="ui-textfield" />
    );


}

export default Input;