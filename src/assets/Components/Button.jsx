import "./Button.css";

function Button({link=null,btntitle}) {
    return ( 
        <a className="btn" href={link}>{btntitle}</a>
     );
}

export default Button;



