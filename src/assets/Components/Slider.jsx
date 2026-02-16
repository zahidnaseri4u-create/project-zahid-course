import Button from "./Button";
import "./Slider.css";

function Slider(){
    return (
        <div className="container-fluid Slider">
            <div className="container slid">
                <div className="left-slider">
                    
                    <h2> Lever Up your</h2><br />
                    <h2 className = "midlleh"> Computer Journy with</h2> <br />
                    <h2>Zahid Nasiri</h2>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ex voluptates. Atque consectetur aliquid officia enim. Iusto rerum quisquam pariatur voluptates ipsam qui doloribus non nobis. Et officiis facilis aut!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia reprehenderit quaerat doloremque? Reiciendis eveniet officia repudiandae quos asperiores nulla quam non quos.</p>
                    <Button link="link" btntitle="new courses" />
                    <Button link="link2" btntitle="Apply" />
                </div>
                <div className="right-slider">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN2k81KlxSz-UIQ7bZWsUn4a5gJxR6N55sg&s" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slider ;