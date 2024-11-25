// Toán tử spread dùng để làm gì??
// sử dụng để ghép 2 object
// Cách làm 
const person1 = {
    id: 1,
    name: "Nguyễn Thuần",
    age: 25
}
const info = {
    address: "Bến Tre",
    number: '0337660583'
}
const detail = { ...person1, ...info };
console.log(detail)
// Sử dụng để tạo ra 1 object hoặc 1 array khác khi chỉ muốn một vài thuộc tính
const { id, ...rest } = detail;
console.log(rest)

function Navbar(props) {
    const {children, ...rest} = props;
    return <h1 {...rest}>{children}</h1>;
}

