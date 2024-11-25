const Link = ({ children, href }) => {
    return (
        <a href={href} className="ui-link">{children}</a>

    );


}

export default Link;