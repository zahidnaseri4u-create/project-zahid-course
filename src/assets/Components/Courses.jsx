import Card from "./Card";
import mydata from "../DB/mydata";

function Courses() {
    return ( 
        <div className="container">
            {mydata.map((val)=><Card image={val.img} title={val.title} desc={val.desc} btnlink={val.btnlink} />)}
        </div>
     );
}

export default Courses;