import Button from "./Button";
import "./card.css"

function card({image,title,desc,btnlink}){
    return (
        <div className="card">
            <div className="card-header">
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <div className="card-footer">
                <Button link={btnlink} btntitle="new Butt" />
            </div>
        </div>
    )
}

export default card;